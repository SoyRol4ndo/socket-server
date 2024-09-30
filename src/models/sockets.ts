import { Server as SocketIOServer, Socket } from "socket.io";
import { PrismaClient } from "@prisma/client";

export class Sockets {
  private io: SocketIOServer;
  private prisma: PrismaClient;

  constructor(io: SocketIOServer) {
    this.io = io;
    this.prisma = new PrismaClient();
    this.socketEvents();
  }

  private socketEvents(): void {
    this.io.on("connection", async (socket: Socket) => {
      try {
        // Recuperar los datos de la base de datos
        const business = await this.prisma.business.findFirst({
          include: {
            main: true,
            history: true,
            footer: true,
            characteristics: true,
            menuCategories: {
              include: {
                items: true,
              },
            },
            mesas: true,
          },
        });

        if (!business) {
          throw new Error("No se encontró información del negocio");
        }

        // Preparar los datos en el formato esperado por el frontend
        const formattedData = {
          nombreNegocio: business.nombreNegocio,
          main: business.main,
          history: business.history,
          characteristics: business.characteristics,
          footer: business.footer,
          mesas: business.mesas.map((mesa) => ({
            mesa: mesa.mesa,
            id: mesa.id,
            bussy: mesa.bussy,
          })),
          new_data_menu: business.menuCategories.map((category) => ({
            id: category.id,
            nombre: category.nombre,
            items: category.items.map((item) => ({
              id: item.id,
              nombre: item.nombre,
              descripcion: item.descripcion,
              precio: item.precio,
              foto: item.foto,
              habilitado: item.habilitado,
            })),
          })),
        };

        // Emitir los datos recuperados al cliente conectado
        socket.emit("emit-data", formattedData);

        interface MenuItem {
          nombre: string;
          descripcion: string;
          precio: number;
          foto: string;
          habilitado: boolean;
        }
        socket.on("send-item", async (newMenu) => {
          try {
            // Destructuring del objeto recibido
            const [{ nombre, items }] = newMenu;

            console.log(`Creando nueva categoría: ${nombre}`);

            // Creación de la categoría y sus ítems
            await this.prisma.menuCategory.create({
              data: {
                nombre,
                businessId: 1,
                items: {
                  create: items.map((item: MenuItem) => ({
                    nombre: item.nombre,
                    descripcion: item.descripcion,
                    precio: item.precio,
                    foto: item.foto,
                    habilitado: item.habilitado,
                  })),
                },
              },
            });

            console.log("Categoría y sus ítems creados con éxito");
          } catch (error) {
            console.error("Error al crear la categoría:", error);
          }
        });

        socket.on("page-data", async (data) => {});
      } catch (error) {
        console.error("Error al recuperar los datos:", error);
        socket.emit("error", "Error al recuperar los datos");
      }
    });
  }
}
