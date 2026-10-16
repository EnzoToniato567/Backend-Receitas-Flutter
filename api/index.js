require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const receitaRoutes = require("./src/routes/receita.routes");
app.use("/receita", receitaRoutes);

const rotas = {
  message: "API de receitas online",
  rotas: [
    { rota: "/", verbo: "GET" },
    { rota: "/receita/cadastrar", verbo: "POST" },
    { rota: "/receita/listar", verbo: "GET" },
    { rota: "/receita/atualizar/:id", verbo: "PUT" },
    { rota: "/receita/excluir/:id", verbo: "DELETE" }
  ]
};

app.get("/", (req, res) => {
  res.json(rotas);
});

module.exports = app;
