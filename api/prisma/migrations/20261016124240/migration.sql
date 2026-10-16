-- CreateTable
CREATE TABLE `Receita` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `ingredientes` VARCHAR(191) NOT NULL,
    `modo_preparo` VARCHAR(191) NOT NULL,
    `url_imagem` VARCHAR(191) NOT NULL,
    `custo` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
