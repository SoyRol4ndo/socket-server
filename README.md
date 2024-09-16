# DESCRIPCION

## Backend en node con TypeScript y socket.io para conectar con frontend

1. Clonar el repositorio
2. Instalar las dependencias `npm install`
3. Renombrar el archivo `temp.env` a `.env`

4. Levantar el servidor con `npm run dev`
5. Resetar la base datos`npx prisma migrate reset` automaticamnte se corre el seed
6. Correr el seed `npx prisma db seed`

## Uso

El servidor se encarga de manejar las conexiones de los usuarios y de emitir eventos a
los clientes conectados apuntando al _localhost:3000_
