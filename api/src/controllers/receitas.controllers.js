const prisma = require("../data/prisma");

const listar = async (req, res) => {
    const receitas = await prisma.receita.findMany();

    return res.status(200).json(receitas);
};

const cadastrar = async (req, res) => {
    const data = req.body;

    const receita = await prisma.receita.create({
        data: {
            nome: data.nome,
            ingredientes: data.ingredientes,
            modo_preparo: data.modo_preparo,
            url_imagem: data.url_imagem
        }
    });

    return res.status(201).json(receita);
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const receita = await prisma.receita.update({
        where: { id: Number(id) },
        data: {
            nome: data.nome,
            ingredientes: data.ingredientes,
            modo_preparo: data.modo_preparo,
            url_imagem: data.url_imagem
        }
    });

    return res.status(200).json(receita);
};

const excluir = async (req, res) => {
    try {
        const { id } = req.params;

        const receita = await prisma.receita.delete({
            where: { id: Number(id) }
        });

        return res.status(200).json(receita);
    } catch (error) {
        console.error("Erro ao excluir receita:", error);
        return res.status(500).json({ error: "Erro interno do servidor ao excluir receita." });
    }
};

module.exports = {
    cadastrar,
    listar,
    atualizar,
    excluir
};
