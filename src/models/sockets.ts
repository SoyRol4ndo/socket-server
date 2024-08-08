import {Server as SocketIOServer, Socket} from "socket.io";

export class Sockets {
	private io: SocketIOServer;

	constructor(io: SocketIOServer) {
		this.io = io;
		this.socketEvents();
	}

	private socketEvents(): void {
		this.io.on("connection", (socket: Socket) => {
			const data = {
				nombreNegocio: "Pinto-Pizzas",
				main: {
					title: "TÍTULO HAZ CLIC AQUÍ PARA cosas",
					label: "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.",
					foto: "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
				},
				history: {
					title: "Desde la granja con toque especial",
					label: "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.",
					foto: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
				},
				characteristics: [
					{
						logo: "https://images.pexels.com/photos/2549355/pexels-photo-2549355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
						item: "Rapidez",
						text: "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil.",
					},
					{
						logo: "https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
						item: "Variedad",
						text: "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil.",
					},
					{
						logo: "https://images.pexels.com/photos/6002003/pexels-photo-6002003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
						item: "Sabor",
						text: "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil.",
					},
				],
				footer: {
					name: "Pinto | Pizzeria",
					correo: "correo@correo.com",
					logo: "https://images.pexels.com/photos/11459428/pexels-photo-11459428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
					instagram: "www.instagram.com",
					facebook: "www.facebook.com",
					contacto: "+53 55555555",
				},
				menu: {
					platosPrincipales: [
						{
							id: 1,
							nombre: "Pollo a la Parrilla",
							foto: "pollo_parrilla.jpg",
							descripcion: "Delicioso pollo a la parrilla con especias.",
							precio: 12.99,
						},
						{
							id: 2,
							nombre: "Bistec de Res",
							foto: "bistec_res.jpg",
							descripcion: "Jugoso bistec de res cocinado a la perfección.",
							precio: 15.99,
						},
						{
							id: 3,
							nombre: "Salmón Ahumado",
							foto: "salmon_ahumado.jpg",
							descripcion: "Salmón ahumado servido con salsa de eneldo.",
							precio: 18.5,
						},
						{
							id: 4,
							nombre: "Pasta Alfredo",
							foto: "pasta_alfredo.jpg",
							descripcion: "Pasta en salsa Alfredo cremosa.",
							precio: 11.75,
						},
						{
							id: 5,
							nombre: "Tacos de Pescado",
							foto: "tacos_pescado.jpg",
							descripcion: "Tacos rellenos de pescado fresco con salsa especial.",
							precio: 10.5,
						},
						{
							id: 6,
							nombre: "Ensalada César",
							foto: "ensalada_cesar.jpg",
							descripcion: "Ensalada César con pollo a la parrilla.",
							precio: 9.99,
						},
					],
					bebidas: [
						{
							id: 7,
							nombre: "Coca Cola",
							foto: "coca_cola.jpg",
							descripcion: "Refresco Coca Cola.",
							precio: 2.5,
						},
						{
							id: 8,
							nombre: "Limonada",
							foto: "limonada.jpg",
							descripcion: "Limonada fresca hecha en casa.",
							precio: 3.0,
						},
						{
							id: 9,
							nombre: "Té Helado",
							foto: "te_helado.jpg",
							descripcion: "Té helado con limón.",
							precio: 2.75,
						},
						{
							id: 10,
							nombre: "Café",
							foto: "cafe.jpg",
							descripcion: "Café negro recién hecho.",
							precio: 2.0,
						},
						{
							id: 11,
							nombre: "Jugo de Naranja",
							foto: "jugo_naranja.jpg",
							descripcion: "Jugo de naranja natural.",
							precio: 3.5,
						},
						{
							id: 12,
							nombre: "Agua Mineral",
							foto: "agua_mineral.jpg",
							descripcion: "Agua mineral con gas.",
							precio: 2.0,
						},
					],
					pizzas: [
						{
							id: 13,
							nombre: "Pizza Margherita",
							foto: "pizza_margherita.jpg",
							descripcion: "Pizza clásica con tomate, mozzarella y albahaca.",
							precio: 8.99,
						},
						{
							id: 14,
							nombre: "Pizza Pepperoni",
							foto: "pizza_pepperoni.jpg",
							descripcion: "Pizza con pepperoni y queso mozzarella.",
							precio: 9.99,
						},
						{
							id: 15,
							nombre: "Pizza Hawaiana",
							foto: "pizza_hawaiana.jpg",
							descripcion: "Pizza con jamón y piña.",
							precio: 10.5,
						},
						{
							id: 16,
							nombre: "Pizza Cuatro Quesos",
							foto: "pizza_cuatro_quesos.jpg",
							descripcion: "Pizza con una mezcla de cuatro quesos.",
							precio: 11.0,
						},
						{
							id: 17,
							nombre: "Pizza Vegetariana",
							foto: "pizza_vegetariana.jpg",
							descripcion: "Pizza con una variedad de vegetales frescos.",
							precio: 9.5,
						},
						{
							id: 18,
							nombre: "Pizza BBQ",
							foto: "pizza_bbq.jpg",
							descripcion: "Pizza con pollo BBQ y cebolla.",
							precio: 11.5,
						},
					],
					agregados: [
						{
							id: 19,
							nombre: "Papas Fritas",
							foto: "papas_fritas.jpg",
							descripcion: "Papas fritas crujientes.",
							precio: 3.99,
						},
						{
							id: 20,
							nombre: "Aros de Cebolla",
							foto: "aros_cebolla.jpg",
							descripcion: "Aros de cebolla empanizados y fritos.",
							precio: 4.5,
						},
						{
							id: 21,
							nombre: "Ensalada Verde",
							foto: "ensalada_verde.jpg",
							descripcion: "Ensalada de lechuga, tomate y pepino.",
							precio: 5.5,
						},
						{
							id: 22,
							nombre: "Pan de Ajo",
							foto: "pan_ajo.jpg",
							descripcion: "Pan de ajo tostado.",
							precio: 3.0,
						},
						{
							id: 23,
							nombre: "Nachos",
							foto: "nachos.jpg",
							descripcion: "Nachos con queso y jalapeños.",
							precio: 6.0,
						},
						{
							id: 24,
							nombre: "Sopa del Día",
							foto: "sopa_dia.jpg",
							descripcion: "Sopa del día recién hecha.",
							precio: 4.99,
						},
					],
					entrantes: [
						{
							id: 25,
							nombre: "Bruschetta",
							foto: "bruschetta.jpg",
							descripcion: "Pan tostado con tomate y albahaca.",
							precio: 5.0,
						},
						{
							id: 26,
							nombre: "Calamares Fritos",
							foto: "calamares_fritos.jpg",
							descripcion: "Calamares empanizados y fritos.",
							precio: 7.5,
						},
						{
							id: 27,
							nombre: "Alitas de Pollo",
							foto: "alitas_pollo.jpg",
							descripcion: "Alitas de pollo con salsa BBQ.",
							precio: 8.0,
						},
						{
							id: 28,
							nombre: "Empanadas",
							foto: "empanadas.jpg",
							descripcion: "Empanadas rellenas de carne.",
							precio: 6.5,
						},
						{
							id: 29,
							nombre: "Quesadillas",
							foto: "quesadillas.jpg",
							descripcion: "Quesadillas de queso con guacamole.",
							precio: 7.0,
						},
						{
							id: 30,
							nombre: "Tortilla Española",
							foto: "tortilla_espanola.jpg",
							descripcion: "Tortilla de patatas tradicional.",
							precio: 5.5,
						},
					],
					postres: [
						{
							id: 31,
							nombre: "Tiramisú",
							foto: "tiramisu.jpg",
							descripcion: "Postre italiano con café y mascarpone.",
							precio: 4.99,
						},
						{
							id: 32,
							nombre: "Helado de Vainilla",
							foto: "helado_vainilla.jpg",
							descripcion: "Helado de vainilla cremoso.",
							precio: 3.5,
						},
						{
							id: 33,
							nombre: "Pastel de Chocolate",
							foto: "pastel_chocolate.jpg",
							descripcion: "Pastel de chocolate húmedo y delicioso.",
							precio: 5.0,
						},
						{
							id: 34,
							nombre: "Crema Catalana",
							foto: "crema_catalana.jpg",
							descripcion: "Postre cremoso con caramelo.",
							precio: 4.5,
						},
						{
							id: 35,
							nombre: "Cheesecake",
							foto: "cheesecake.jpg",
							descripcion: "Cheesecake clásico con base de galleta.",
							precio: 5.5,
						},
						{
							id: 36,
							nombre: "Fruta Fresca",
							foto: "fruta_fresca.jpg",
							descripcion: "Selección de fruta fresca de temporada.",
							precio: 3.99,
						},
					],
				},
				mesas: [
					{
						id: 1,
						mesa: "Mesa 1",
					},
					{
						id: 2,
						mesa: "Mesa 2",
					},
					{
						id: 3,
						mesa: "Mesa 3",
					},
					{
						id: 4,
						mesa: "Mesa 4",
					},
				],
			};

			socket.emit("emit-data", data);
		});
	}
}
