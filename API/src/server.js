require("express-async-errors");
const AppError = require('./utils/AppError');
const migrationsRun = require('./database/sqlite/migrations');
const express = require("express"); // import express from express
const routes = require("./routes");

migrationsRun();

const { Database } = require("sqlite");

const app = express(); // incializou
app.use(express.json()); // isso informa a linguagem da requisição 


app.use(routes);



app.use((error, request, response,next)=>{
    if(error instanceof AppError){ // gerado pelo cliente
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message,
        });
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "internal error",
        // qual o status? 500?
    });
});


const PORT = 3000; // atribuimos um variavel para a porta(url)
app.listen(PORT,() => console.log(`Server is running at ${PORT}`));// quando a aplicação iniciar, essa mensagem vai aparecer "listen"