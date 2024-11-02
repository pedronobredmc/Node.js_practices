// Importa o módulo Express, que facilita a criação de servidores web em Node.js.
const express = require("express");

// Cria uma nova aplicação Express.
const app = express();

// Define uma rota GET para o endpoint '/' (raiz do site).
// Quando o usuário acessa '/', o servidor responde enviando o texto "Hello World!".
app.get("/", function(req, res){
    res.send("Hello World!");
});

// Define uma rota GET para o endpoint '/ola/:nome/:cargo'.
// Esta rota captura parâmetros dinâmicos 'nome' e 'cargo' diretamente da URL.
// A resposta inclui uma mensagem de boas-vindas com o nome e o cargo inseridos na URL.
app.get("/ola/:nome/:cargo", function(req, res){
    // Utiliza req.params para acessar os parâmetros 'nome' e 'cargo' da URL.
    // A resposta é formatada como HTML, exibindo uma mensagem de boas-vindas personalizada.
    res.send("<h1>" + req.params.nome + " " + req.params.cargo + "</h1>" + "\n" + "<h2>Seja bem vindo ao meu site, " + req.params.nome + "!</h2>");
});

// Inicia o servidor e define a porta 8081 para ele escutar.
// Exibe uma mensagem no console informando que o servidor está rodando na URL 'http://localhost:8081'.
app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});
