require('dotenv').config();
const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const receitasRoutes = require('./src/routes/receita.routes');
app.use('/receita', receitasRoutes);

app.use('/',(req, res)=>{
  res.json("API receitas online");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
