const prisma = require("../data/prisma");

const listar = async (req, res) => {
    const lista = await prisma.receita.findMany();

    res.json(lista).status(200).end();
};

const cadastrar = async (req, res) => {
    const item = await prisma.receita.create({
        data: req.body
    });

    res.json(item).status(201).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const item = await prisma.receita.update({
        where: { id: Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.receita.delete({
        where: { id : Number(id) }
    });

    res.json(item).status(200).end();
};

module.exports = {
    cadastrar,
    listar,
    atualizar,
    excluir
}
