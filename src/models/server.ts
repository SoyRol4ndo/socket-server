import express, {Application} from "express";
import http from "http";
import socketio, {Server as SocketIOServer} from "socket.io";
import path from "path";
import {Sockets} from "./sockets";

export class Server {
	private app: Application;
	private port: string | undefined;
	private server: http.Server;
	private io: SocketIOServer;

	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		this.server = http.createServer(this.app);

		this.io = new SocketIOServer(this.server, {
			/* configuraciones */
		});
	}

	private middlewares(): void {
		this.app.use(express.static(path.resolve(__dirname, "../../public")));
	}

	private configurarSockets(): void {
		new Sockets(this.io);
	}

	public execute(): void {
		this.middlewares();
		this.configurarSockets();

		this.server.listen(this.port, () => {
			console.log("Server corriendo en puerto:", this.port);
		});
	}
}
