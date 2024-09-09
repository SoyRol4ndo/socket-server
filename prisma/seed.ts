import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Crear el negocio principal (Business)
  const business = await prisma.business.create({
    data: {
      name: "Pinto-Pizzas",
      mainTitle: "TÍTULO HAZ CLIC AQUÍ PARA cosas",
      mainLabel:
        "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Aquí puedes contar tu historia.",
      mainPhoto:
        "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg",
      historyTitle: "Desde la granja con toque especial",
      historyLabel:
        "Párrafo. Haz clic aquí para agregar tu propio texto y editar.",
      historyPhoto:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      footerName: "Pinto | Pizzeria",
      footerEmail: "correo@correo.com",
      footerLogo:
        "https://images.pexels.com/photos/11459428/pexels-photo-11459428.jpeg",
      footerInstagram: "www.instagram.com",
      footerFacebook: "www.facebook.com",
      footerContact: "+53 55555555",
      characteristics: {
        create: [
          {
            logo: "https://images.pexels.com/photos/2549355/pexels-photo-2549355.jpeg",
            item: "Rapidez",
            text: "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil.",
          },
          {
            logo: "https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg",
            item: "Variedad",
            text: "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil.",
          },
          {
            logo: "https://images.pexels.com/photos/6002003/pexels-photo-6002003.jpeg",
            item: "Sabor",
            text: "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil.",
          },
        ],
      },
      menuItems: {
        create: [
          {
            name: "Pollo a la Parrilla",
            photo:
              "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
            description: "Delicioso pollo a la parrilla con especias.",
            price: 12.99,
          },
          {
            name: "Pasta Alfredo",
            photo:
              "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
            description: "Pasta con salsa Alfredo cremosa.",
            price: 9.99,
          },
        ],
      },
      tables: {
        create: [
          { name: "Mesa 1", busy: true },
          { name: "Mesa 2", busy: true },
          { name: "Mesa 3", busy: false },
          { name: "Mesa 4", busy: false },
        ],
      },
    },
  });

  console.log("Business created: ", business);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
