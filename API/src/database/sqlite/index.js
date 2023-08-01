const sqlite3 = require('sqlite3'); // drive responsavel pela conexao com a base de dados. Ele será utilizado posteriormente para configurar o driver do SQLite
const sqlite = require('sqlite'); // responsável por fornecer uma API assíncrona para a manipulação de bancos de dados SQLite. Esse módulo facilita a criação de consultas e o acesso ao banco de dados.
const path = require('path'); //utilitários para trabalhar com caminhos de arquivos e diretórios, para n utilizar uma url fixa

async function sqliteConnection(){ // função assincrona para operações que podem levar algum tempo para serem concluídas
    const database = await sqlite.open({ //abrir a conexão com o banco de dados SQLite  usamos await para aguardar a resolução da Promise e obter o objeto de banco de dados.
        filename: path.resolve(__dirname, '..', 'database.db'), // Esta propriedade define o caminho do arquivo do banco de dados que queremos abrir, o path ajudou nisso
        driver: sqlite3.Database //Aqui, estamos especificando o driver SQLite a ser utilizado pelo módulo 
    });
    return database;
}
module.exports = sqliteConnection;

//SGBD - SISTEMA DE GENRENCIAMENTO DE BANCO DE DADOS, para visiualizar os arquivos dos bancos de dados e vamos utilizar o beekeeper