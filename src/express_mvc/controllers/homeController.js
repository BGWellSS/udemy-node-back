exports.homePage = (req, res) => {
  res.send(`
    <h1><b>Home Page</b></h1>
    <form action="/" method="POST">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" name="nome">
      <button type="submit">Enviar</button>
    </form>
  `);
};

exports.trataPost = (req, res) => {
  res.send("Ei, sou sua nova rota de POST.");
};
