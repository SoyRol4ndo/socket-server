import {Server as SocketIOServer, Socket} from "socket.io";
import {cocina} from "../data/seed/cocina_data_mock";
import {new_data_menu} from "../data/seed/new_data_menu";
import { data } from "../data/seed/data";
export class Sockets {
	private io: SocketIOServer;

	constructor(io: SocketIOServer) {
		this.io = io;
		this.socketEvents();
	}

	private socketEvents(): void {
		this.io.on("connection", (socket: Socket) => {
		
			socket.emit("emit-data", {...data, cocina, new_data_menu});

			socket.on("saveOrder", data => {
				const orderTable = JSON.stringify(data);
				console.log(orderTable);

				socket.emit("orderSaved", orderTable);
			});

			socket.on("orden-lista", data => {
				console.log(data);
			});
		});
	}
}
