-- CreateTable
CREATE TABLE "Business" (
    "id" SERIAL NOT NULL,
    "nombreNegocio" TEXT NOT NULL,
    "mainId" INTEGER NOT NULL,
    "historyId" INTEGER NOT NULL,
    "footerId" INTEGER NOT NULL,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Main" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "foto" TEXT NOT NULL,

    CONSTRAINT "Main_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "History" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "foto" TEXT NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Characteristic" (
    "id" SERIAL NOT NULL,
    "logo" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "businessId" INTEGER NOT NULL,

    CONSTRAINT "Characteristic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Footer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,

    CONSTRAINT "Footer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mesa" (
    "id" SERIAL NOT NULL,
    "mesa" TEXT NOT NULL,
    "bussy" BOOLEAN NOT NULL,
    "businessId" INTEGER NOT NULL,

    CONSTRAINT "Mesa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuCategory" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "businessId" INTEGER NOT NULL,

    CONSTRAINT "MenuCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuItem" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "foto" TEXT NOT NULL,
    "habilitado" BOOLEAN NOT NULL DEFAULT true,
    "menuCategoryId" TEXT NOT NULL,

    CONSTRAINT "MenuItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Business_mainId_key" ON "Business"("mainId");

-- CreateIndex
CREATE UNIQUE INDEX "Business_historyId_key" ON "Business"("historyId");

-- CreateIndex
CREATE UNIQUE INDEX "Business_footerId_key" ON "Business"("footerId");

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_mainId_fkey" FOREIGN KEY ("mainId") REFERENCES "Main"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "History"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_footerId_fkey" FOREIGN KEY ("footerId") REFERENCES "Footer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Characteristic" ADD CONSTRAINT "Characteristic_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mesa" ADD CONSTRAINT "Mesa_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuCategory" ADD CONSTRAINT "MenuCategory_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuItem" ADD CONSTRAINT "MenuItem_menuCategoryId_fkey" FOREIGN KEY ("menuCategoryId") REFERENCES "MenuCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
