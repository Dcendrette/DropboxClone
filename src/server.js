const express = require( 'express');
const mongoose = require('mongoose'); 

const app = express(); // joga as funcoes express para dentro da variavel app

mongoose.connect("mongodb+srv://user1_dropbo:zqoEhPjUIisswgmF@cluster0-a9hn5.mongodb.net/dropboxclone?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true

});


// ***HELLO WORD app.get('/teste', (req, res) => {  /// metodo get envia a requisição e res.send envia hello word
    //return res.send('Hello Word');
//})

app.use(express.json());   //cadastrar um modulo dentro do exepress entende as requisições em formato json
app.use(express.urlencoded({ extended: true })); //permite envio de arquivos somente json nao permite

app.use(require('./routes')); //utilizar arquivo de rotas




app.listen(3333); // .listen direcionando a porta no navegador localhost:3333