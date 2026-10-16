-- CreateTable
CREATE TABLE "Receita" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "ingredientes" TEXT NOT NULL,
    "modo_preparo" TEXT NOT NULL,
    "url_imagem" TEXT NOT NULL,
    "custo" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Receita_pkey" PRIMARY KEY ("id")
);
