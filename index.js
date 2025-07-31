class Contador {
    constructor(){
        this.counter = 0

        setInterval(()=>{
            this.counter = 0
        }, 1000 * 60 * 60 * 24)
    }

    addToCounter(){
        this.counter++
    }
}

const Count = new Contador()

module.exports = Count

const corsOptions = {
    origin: '*', // Permite que qualquer domínio acesse a API
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };

const cors = require("cors");
const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');
const app = express();
require('dotenv').config();

const getUserInfos = require('./src/Routes/getUserInfos');
const serverInviteGetInfos = require('./src/Routes/serverInviteGetInfos');
const infosFromAPI = require('./src/Routes/infosFromAPI');

const limiter = rateLimit({
    windowMs: 1000, 
    max: 4,
    message: 'Too many requests, please try again later.',
});

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'Public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'index.html'));
});

app.use('/users', limiter);
app.use('/invite', limiter);

app.get('/users/:id', getUserInfos);
app.get('/invite/:invite', serverInviteGetInfos);
app.get('/aubreyinfosgeter', infosFromAPI);

app.use((req, res) => {
    res.redirect('/'); 
});

app.listen(1323, () => {
  console.log(`Servidor rodando em http://localhost:8080`);
});

