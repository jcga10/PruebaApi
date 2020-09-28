const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/api';
const cors= require('cors');

const app=express();
app.use(cors());


mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true });
const con= mongoose.connection;

con.on('open', ()=>{
    console.log('connected...');
})

app.use(express.json());



const productRouter= require('./routes/productos');
app.use('/productos',productRouter,cors());



app.listen(3001, ()=>{
    console.log('Servidor en el puerto 3001');
})