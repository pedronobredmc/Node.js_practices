const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

// config
    // Template Engine
    app.engine('handlebars', handlebars.engine({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
    }));
    app.set('view engine', 'handlebars');
    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
// config fim


// Rotas
app.get('/cad', function(req, res){
    res.render('formulario');
});

app.get('/', function(req, res){
    Post.findAll().then(function(posts){
        res.render('home', {posts: posts});
    });
});

app.post('/add', function(req, res){
    Post.create({
        titulo:req.body.titulo,
        conteudo:req.body.conteudo
    }).then(function(){
        res.redirect('/');
    }).catch(function(erro){
        res.send('Erro: ' + erro);
    });
});
// Rotas fim

// Inicialização do servidor
app.listen(8081, function(){
    console.log('Servidor rodando na url http://localhost:8081');
});