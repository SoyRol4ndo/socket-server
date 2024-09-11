// schema.prisma
// (El esquema Prisma se mantiene igual que en el artefacto anterior)

// seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Crear Main
  const main = await prisma.main.create({
    data: {
      title: "TÍTULO HAZ CLIC AQUÍ PARA cosas",
      label:
        "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Aquí puedes contar tu historia.",
      foto: "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg",
    },
  });

  // Crear History
  const history = await prisma.history.create({
    data: {
      title: "Desde la granja con toque especial",
      label: "Párrafo. Haz clic aquí para agregar tu propio texto y editar.",
      foto: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    },
  });

  // Crear Footer
  const footer = await prisma.footer.create({
    data: {
      name: "Pinto | Pizzeria",
      correo: "correo@correo.com",
      logo: "https://images.pexels.com/photos/11459428/pexels-photo-11459428.jpeg",
      instagram: "www.instagram.com",
      facebook: "www.facebook.com",
      contacto: "+53 55555555",
    },
  });

  // Crear el negocio principal (Business)
  const business = await prisma.business.create({
    data: {
      nombreNegocio: "Pinto-Pizzas",
      mainId: main.id,
      historyId: history.id,
      footerId: footer.id,
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
      mesas: {
        create: [
          { mesa: "Mesa 1", bussy: true },
          { mesa: "Mesa 2", bussy: true },
          { mesa: "Mesa 3", bussy: false },
          { mesa: "Mesa 4", bussy: false },
        ],
      },
      menuCategories: {
        create: [
          {
            nombre: "Platos Principales",
            items: {
              create: [
                {
                  nombre: "Pollo a la Parrilla",
                  foto: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
                  descripcion: "Delicioso pollo a la parrilla con especias.",
                  precio: 12.99,
                  habilitado: true,
                },
                {
                  nombre: "Pasta Alfredo",
                  foto: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
                  descripcion: "Pasta con salsa Alfredo cremosa.",
                  precio: 9.99,
                  habilitado: true,
                },
              ],
            },
          },
          {
            nombre: "XXX ",
            items: {
              create: [
                {
                  nombre: "Viagra",
                  foto: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
                  descripcion: "Delicioso pollo a la parrilla con especias.",
                  precio: 12.99,
                  habilitado: true,
                },
                {
                  nombre: "Consolador",
                  foto: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
                  descripcion: "Pasta con salsa Alfredo cremosa.",
                  precio: 9.99,
                  habilitado: true,
                },
              ],
            },
          },
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
