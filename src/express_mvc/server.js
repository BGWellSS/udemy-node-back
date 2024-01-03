function server() {
  const express = require("express");
  const app = express();
  const routes = require("./routes");
  const path = require("path");

  app.use(express.urlencoded({ extended: true }));

  app.set("views", path.resolve(__dirname, "views"));
  app.set("view engine", "ejs");

  app.use(routes);

  app.listen(3000, () => {
    console.log("Aplicação ouvindo na porta 3000");
    console.log("Para testar, acesse no seu navegador http://localhost:3000");
    console.log("Para encerrar a aplicação, pressione Ctrl + C");
  });
}

module.exports = server;
