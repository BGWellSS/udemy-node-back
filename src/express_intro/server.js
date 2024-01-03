function server() {
  const express = require("express");
  const app = express();

  app.use(express.urlencoded({ extended: true }));

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
    // Parametros de corpo (body)
    res.send(
      `Formulário de Contato Recebido! </br>Conteudo recebido: ${req.body.nome}`
    );
  });

  app.get("/aulaParametros/:idUsuario?/:nome?", (req, res) => {
    // Parametros de rota (params) e Query String (query
    // http://localhost:3000/contato/1/Wellington?sobrenome=Silva
    res.send(
      `Aula sobre parâmetros<br>
        (params): ${
          req.params.idUsuario ? req.params.idUsuario : `Param - Não informado`
        } - ${req.params.nome ? req.params.nome : `Param - Não informado`}
        <br>
        (query): ${
          req.query.sobrenome ? req.query.sobrenome : `Query - Não informado`
        }`
    );
  });

  app.listen(3000, () => {
    console.log("Aplicação ouvindo na porta 3000");
    console.log("Para testar, acesse no seu navegador http://localhost:3000");
    console.log("Para encerrar a aplicação, pressione Ctrl + C");
  });
}

module.exports = server;
