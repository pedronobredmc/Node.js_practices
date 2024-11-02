const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

// config
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    // Conexão com o banco de dados
    const sequelize = new Sequelize('sistemaDeCadastro', 'nobrega', "123456", {
        host: 'localhost',  
        dialect: 'mysql'    
    });
// config fim

app.listen(8081, function(){
    console.log('Servidor rodando na url http://localhost:8081');
});