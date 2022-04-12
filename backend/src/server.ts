import express from "express";

// @types/express
const app = express();

app.use(express.json());

/**
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */

app.get("/test", (request, response) => {
  // Request => Entrando
  // Response => Saindo
  return response.json("Olá test");
});

app.post("/test-post", (request, response) => {
  return response.json({message: 'Olá test método POST, com formato json'});
});

// http://localhost:3000
app.listen(3000, () => console.log("🚀 Server is running...🚀"));