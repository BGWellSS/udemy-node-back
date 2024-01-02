const fs = require("fs").promises;
const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "arquivos", "teste.txt");
const caminhoArquivoJson = path.resolve(__dirname, "arquivos", "teste.json");

function escreveArquivo1() {
  /**
   *  flag: w -> write (sobrescrever)
   *  flag: a -> append (adicionar)
   */
  fs.writeFile(caminhoArquivo, "Frase teste\n", {
    flag: "a",
    encoding: "utf-8",
  })
    .then(() => {
      console.log("Arquivo escrito com sucesso!");
    })
    .catch((err) => {
      console.log(err);
    });
}

/**
 * Escrevendo arquivos JSON
 */
const pessoas = [
  { nome: "João" },
  { nome: "Maria" },
  { nome: "Eduardo" },
  { nome: "Luiza" },
];

const json = JSON.stringify(pessoas, "", 2);

function escreveArquivo2(caminho, dados) {
  fs.writeFile(caminho, dados, {
    flag: "w",
    encoding: "utf-8",
  })
    .then(() => {
      console.log("Arquivo escrito com sucesso!");
    })
    .catch((err) => {
      console.log(err);
    });
}

/**
 * Execução
 */
// escreveArquivo1();
escreveArquivo2(caminhoArquivoJson, json);
