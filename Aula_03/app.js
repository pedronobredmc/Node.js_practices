// Importa o módulo HTTP nativo do Node.js, que permite criar um servidor web.
var http = require('http');

// Cria um servidor HTTP usando o método 'createServer'.
// A função de callback recebe dois parâmetros: 'req' (requisição) e 'res' (resposta).
http.createServer(function(req, res){
    // Finaliza a resposta e envia o texto "hello world" para o cliente.
    res.end("hello world");
    
// Define a porta 8081 para o servidor escutar requisições.
}).listen(8081);

// Exibe uma mensagem no console informando que o servidor está rodando na URL 'http://localhost:8081/'.
console.log('Servidor rodando em http://localhost:8081/');
