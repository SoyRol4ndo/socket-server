import { Server as SocketIOServer, Socket } from "socket.io";
import { PrismaClient } from "@prisma/client"; // Importar Prisma

export class Sockets {
  private io: SocketIOServer;
  private prisma: PrismaClient; // Crear una instancia de PrismaClient

  constructor(io: SocketIOServer) {
    this.io = io;
    this.prisma = new PrismaClient(); // Inicializar PrismaClient
    this.socketEvents();
  }

  private socketEvents(): void {
    this.io.on("connection", async (socket: Socket) => {
      try {
        // Recuperar los datos de la base de datos
        const business = await this.prisma.business.findMany({
          include: {
            characteristics: true,
            menuItems: true,
            tables: true,
          },
        });

        const menuItems = await this.prisma.menuItem.findMany();
        const tables = await this.prisma.table.findMany();
        const characteristics = await this.prisma.characteristic.findMany();

        // Emitir los datos recuperados al cliente conectado
        socket.emit("emit-data", {
          business,
          menuItems,
          tables,
          characteristics,
        });

        // Escuchar y manejar la orden guardada
        socket.on("saveOrder", (data) => {
          const orderTable = JSON.stringify(data);
          console.log(orderTable);

          // Emitir la confirmación de la orden guardada
          socket.emit("orderSaved", orderTable);
        });

        // Escuchar cuando la orden esté lista
        socket.on("orden-lista", (data) => {
          console.log(data);
        });
      } catch (error) {
        console.error("Error al recuperar los datos:", error);
        socket.emit("error", "Error al recuperar los datos");
      }
    });
  }
}
