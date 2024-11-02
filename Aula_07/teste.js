// Importa o módulo Sequelize para trabalhar com bancos de dados SQL em Node.js.
const Sequelize = require('sequelize');

// Cria uma nova instância de conexão com o banco de dados 'sistemaDeCadastro'.
// Os parâmetros são: nome do banco, usuário, senha e configurações (host e tipo de banco).
const sequelize = new Sequelize('sistemaDeCadastro', 'nobrega', "123456", {
    host: 'localhost',  // Define o host (servidor) do banco de dados, neste caso, o localhost.
    dialect: 'mysql'    // Define o tipo de banco de dados que será usado (MySQL).
});

// Autentica a conexão com o banco de dados.
// Caso a conexão seja bem-sucedida, exibe 'Conectado com sucesso!' no console.
// Em caso de erro, exibe 'Falha ao se conectar' junto com a mensagem do erro.
sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!');
}).catch(function(erro){
    console.log('Falha ao se conectar: ' + erro);
});

// Define um modelo chamado 'Postagem' para a tabela 'postagens' no banco de dados.
// Aqui são especificados os campos e seus tipos para esta tabela.
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING  // Campo 'titulo' do tipo STRING.
    },
    conteudo: {
        type: Sequelize.TEXT    // Campo 'conteudo' do tipo TEXT.
    }
});

// Cria a tabela 'postagens' no banco de dados se ela não existir.
// A opção { force: true } força a recriação da tabela, apagando dados anteriores.
Postagem.sync({force: true});
