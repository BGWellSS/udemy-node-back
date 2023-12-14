const fs = require("fs").promises;
const path = require("path");

const caminhoArquivo = path.resolve(__dirname, "arquivos", "teste.txt");

async function lerArquivo(caminho) {
  return fs.readFile(caminho, { encoding: "utf-8" });
}

async function recuperaDados(caminho) {
  const dados = await lerArquivo(caminho);
  const dadosJson = JSON.parse(dados);
  renderizaDados(dadosJson);
}

function renderizaDados(dados) {
  dados.forEach((dado) => {
    console.log(dado);
  });
}

/**
 * Execução
 */
recuperaDados(caminhoArquivo);
