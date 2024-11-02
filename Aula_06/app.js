// Importa o módulo Express, que facilita a criação de servidores web em Node.js.
const express = require('express');

// Cria uma nova aplicação Express.
const app = express();

// Define uma rota GET para o endpoint '/' (raiz do site).
// Quando o usuário acessa '/', o servidor responde enviando o arquivo 'index.html' localizado na pasta 'html'.
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

// Define uma rota GET para o endpoint '/sobre'.
// Quando o usuário acessa '/sobre', o servidor responde enviando o arquivo 'sobre.html' localizado na pasta 'html'.
app.get('/sobre', (req, res) => {
    res.sendFile(__dirname + "/html/sobre.html");
  });

// Inicia o servidor e define a porta 8081 para ele escutar.
// Exibe uma mensagem no console informando que o servidor está rodando nesta porta.
app.listen(8081, function(){
    console.log('Server is running on port 8081');
});
