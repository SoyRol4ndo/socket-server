import {Server as SocketIOServer, Socket} from "socket.io";
import {PrismaClient} from "@prisma/client";

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
					mesas: business.mesas.map(mesa => ({
						mesa: mesa.mesa,
						id: mesa.id,
						bussy: mesa.bussy,
					})),
					new_data_menu: business.menuCategories.map(category => ({
						id: category.id,
						nombre: category.nombre,
						items: category.items.map(item => ({
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

				// Escuchar y manejar la orden guardada
				socket.on("saveOrder", data => {
					const orderTable = JSON.stringify(data);
					console.log(orderTable);

					// Emitir la confirmación de la orden guardada
					socket.emit("orderSaved", orderTable);
				});

				// Escuchar cuando la orden esté lista
				socket.on("orden-lista", data => {
					console.log(data);
				});

				// Escuchar cambios en el estado de las mesas
				socket.on("cambiar-estado-mesa", async ({id, estado}) => {
					try {
						await this.prisma.mesa.update({
							where: {id},
							data: {bussy: estado},
						});

						const mesasActualizadas = await this.prisma.mesa.findMany();
						this.io.emit("mesas-actualizadas", mesasActualizadas);
					} catch (error) {
						console.error("Error al actualizar el estado de la mesa:", error);
						socket.emit("error", "Error al actualizar el estado de la mesa");
					}
				});
			} catch (error) {
				console.error("Error al recuperar los datos:", error);
				socket.emit("error", "Error al recuperar los datos");
			}
		});
	}
}
