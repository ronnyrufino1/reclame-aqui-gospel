// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Simula um banco de dados (para teste)
const relatos = [];

app.post('/api/relatos', (req, res) => {
  const { tipoProblema, descricao, impacto, passoSol } = req.body;
  
  // Armazena o relato (com anonimato)
  const relato = {
    id: Date.now(),
    tipoProblema,
    descricao,
    impacto,
    passoSol,
    anonimo: true,
    dataCriacao: new Date().toISOString()
  };
  relatos.push(relato);
  
  res.status(201).json(relato);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
