//mkdir minha-api
//cd minha-api
//npm install
//npm install express

const express = require("express");
const app = express();
const PORT = 3000;

// Permite receber JSON no corpo das requisições
app.use(express.json());

// Rota GET - Buscar usuários
app.get("/usuarios", (req, res) => {
  res.status(200).json([
    { id: 1, nome: "Letícia Frederico" },
    { id: 2, nome: "Laura Souza" }
  ]);
});

// Rota POST - Criar usuário
app.post("/usuarios", (req, res) => {
  const { nome } = req.body;
  if (!nome) {
    return res.status(400).json({ erro: "O campo nome é obrigatório" });
  }
  res.status(201).json({ mensagem: "Usuário criado com sucesso!", nome });
});


//node server.js
