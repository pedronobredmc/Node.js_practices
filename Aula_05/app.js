const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hello World!");
});

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("<h1>" + req.params.nome + " " + req.params.cargo+"</h1>"+"\n"+"<h2>Seja bem vindo ao meu site, " + req.params.nome + "!</h2>");
});

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});