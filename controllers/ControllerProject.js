const express = require("express");
const router = express.Router();
const connection = require("../database/connection.js");

// Rota para obter todos os projetos
router.get("/projetos", async (req, res) => {
    try {
      const projects = await connection("projeto");
      console.log(projects);
      res.json(projects);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
});


// Rota para obter um projeto por ID
router.get("/projeto/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const project = await connection("projeto").where({ id }).first();
  
      if (!project) {
        return res.status(404).json({ error: "Projeto não encontrado" });
      }
  
      res.json(project);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }}
);

// Rota para deletar um projeto por ID
router.delete("/projeto/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await connection("projeto").where({ id }).del();
  
      if (!deleted) {
        return res.status(404).json({ error: "Projeto não encontrado" });
      }
  
      res.status(204).send(); // Retorna uma resposta sem conteúdo (no content) para indicar sucesso na exclusão
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
});
  
  // Rota para atualizar um projeto por ID
router.put("/projeto/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { nome_imagem, extensao_imagem, diretorio_imagem, largura_imagem, altura_imagem } = req.body;
  
      // Verifica se algum campo foi enviado no corpo da requisição
      if (!nome_imagem && !extensao_imagem && !diretorio_imagem && !largura_imagem && !altura_imagem) {
        return res.status(400).json({ error: "Pelo menos um campo deve ser fornecido para atualização" });
      }
  
      const updated = await connection("projeto").where({ id }).update(req.body);
  
      if (!updated) {
        return res.status(404).json({ error: "Projeto não encontrado" });
      }
  
      res.json({ message: "Projeto atualizado com sucesso" });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
});
  


module.exports = router;