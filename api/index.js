require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const receitasRoutes = require("./src/routes/receitas.routes");
app.use("/receitas", receitasRoutes);

app.use("/", (req, res) => {
  res.json("API flutter receitas online");
});

module.exports = app;
