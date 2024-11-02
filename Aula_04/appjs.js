// Importa o módulo Express do diretório "node_modules" para criar um servidor web.
const express = require("./node_modules/express");

// Cria uma nova aplicação Express.
const app = express();

// Define uma rota GET para o endpoint '/' (raiz do site).
// Quando o usuário acessa '/', o servidor responde enviando o texto "Seja bem-vindo ao meu app!".
app.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu app!");
});

// Define uma rota GET para o endpoint '/sobre'.
// Quando o usuário acessa '/sobre', o servidor responde enviando o texto "Minha página sobre".
app.get("/sobre", function(req, res){
    res.send("Minha página sobre");
});

// Define uma rota GET para o endpoint '/blog'.
// Quando o usuário acessa '/blog', o servidor responde enviando o texto "Bem-vindo ao meu blog!".
app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog!");
});

// Inicia o servidor e define a porta 8081 para ele escutar.
// Exibe uma mensagem no console informando que o servidor está rodando na URL 'http://localhost:8081'.
app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});
