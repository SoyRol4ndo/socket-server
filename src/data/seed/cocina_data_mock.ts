type Producto = {
	id: number;
	nombre: string;
	cantidad: number;
	precio: number;
};

type Categoria = {
	Entrantes?: Producto[];
	Bebidas?: Producto[];
	Comidas?: Producto[];
	Pizzas?: Producto[];
	Postres?: Producto[];
	Agregados?: Producto[];
};

type Datos = {
	[key: string]: Categoria;
};

export const cocina: Datos = {
	"1": {
		Entrantes: [
			{
				id: 25,
				nombre: "Bruschetta",
				cantidad: 12,
				precio: 5,
			},
			{
				id: 26,
				nombre: "Calamares Fritos",
				cantidad: 2,
				precio: 7.5,
			},
			{
				id: 27,
				nombre: "Alitas de Pollo",
				cantidad: 6,
				precio: 8,
			},
		],
		Bebidas: [
			{
				id: 7,
				nombre: "Coca Cola",
				cantidad: 1,
				precio: 2.5,
			},
			{
				id: 8,
				nombre: "Limonada",
				cantidad: 1,
				precio: 3,
			},
		],
		Comidas: [
			{
				id: 1,
				nombre: "Pollo a la Parrilla",
				cantidad: 1,
				precio: 12.99,
			},
			{
				id: 2,
				nombre: "Bistec de Res",
				cantidad: 1,
				precio: 15.99,
			},
		],
		Pizzas: [
			{
				id: 13,
				nombre: "Pizza Margherita",
				cantidad: 1,
				precio: 8.99,
			},
			{
				id: 14,
				nombre: "Pizza Pepperoni",
				cantidad: 1,
				precio: 9.99,
			},
			{
				id: 15,
				nombre: "Pizza Hawaiana",
				cantidad: 1,
				precio: 10.5,
			},
		],
		Postres: [
			{
				id: 31,
				nombre: "Tiramisú",
				cantidad: 1,
				precio: 4.99,
			},
			{
				id: 32,
				nombre: "Helado de Vainilla",
				cantidad: 1,
				precio: 3.5,
			},
			{
				id: 33,
				nombre: "Pastel de Chocolate",
				cantidad: 1,
				precio: 5,
			},
			{
				id: 34,
				nombre: "Crema Catalana",
				cantidad: 1,
				precio: 4.5,
			},
		],
	},
	"2": {
		Entrantes: [
			{
				id: 26,
				nombre: "Calamares Fritos",
				cantidad: 1,
				precio: 7.5,
			},
			{
				id: 27,
				nombre: "Alitas de Pollo",
				cantidad: 1,
				precio: 8,
			},
		],
		Postres: [
			{
				id: 31,
				nombre: "Tiramisú",
				cantidad: 1,
				precio: 4.99,
			},
			{
				id: 33,
				nombre: "Pastel de Chocolate",
				cantidad: 1,
				precio: 5,
			},
			{
				id: 32,
				nombre: "Helado de Vainilla",
				cantidad: 1,
				precio: 3.5,
			},
		],
		Agregados: [
			{
				id: 19,
				nombre: "Papas Fritas",
				cantidad: 1,
				precio: 3.99,
			},
			{
				id: 20,
				nombre: "Aros de Cebolla",
				cantidad: 1,
				precio: 4.5,
			},
			{
				id: 21,
				nombre: "Ensalada Verde",
				cantidad: 1,
				precio: 5.5,
			},
		],
	},
	"3": {
		Comidas: [
			{
				id: 1,
				nombre: "Pollo a la Parrilla",
				cantidad: 1,
				precio: 12.99,
			},
			{
				id: 2,
				nombre: "Bistec de Res",
				cantidad: 1,
				precio: 15.99,
			},
			{
				id: 3,
				nombre: "Salmón Ahumado",
				cantidad: 1,
				precio: 18.5,
			},
			{
				id: 4,
				nombre: "Pasta Alfredo",
				cantidad: 1,
				precio: 11.75,
			},
		],
	},
};
