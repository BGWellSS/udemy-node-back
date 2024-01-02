function server() {
  const express = require("express");
  const app = express();

  app.get("/", (req, res) => {
    res.send("<b>Hello World!</b>");
  });

  app.get("/contato", (req, res) => {
    res.send(`
      <h1>Contato</h1>
      <form action="/contato" method="POST">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome">
        <button type="submit">Enviar</button>
      </form>
    `);
  });
  app.post("/contato", (req, res) => {
    res.send("Formulário de Contato Recebido!");
  });

  app.listen(3000, () => {
    console.log("Aplicação ouvindo na porta 3000");
    console.log("Para testar, acesse no seu navegador http://localhost:3000");
    console.log("Para encerrar a aplicação, pressione Ctrl + C");
  });
}

module.exports = server;
