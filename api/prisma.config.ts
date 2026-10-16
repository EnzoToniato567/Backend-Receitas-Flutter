const { PrismaClient } = require("@prisma/client");
// const { PrismaMariaDb } = require("@prisma/adapter-mariadb");
const { PrismaPg } = require("@prisma/adapter-pg");

// const adapter = new PrismaMariaDb(process.env.DATABASE_URL);
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

const prisma = new PrismaClient({ adapter });

module.exports = prisma;