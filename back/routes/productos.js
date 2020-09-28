const express = require('express');
const router= express.Router();
const Producto = require('../models/producto');

router.get('/', async(req, res)=>{

    
    var headerName =req.headers['token'];
    
    if(headerName && headerName == '123'){
        try{
            const productos = await Producto.find();
            res.status(200).json(productos);
        }catch(err){
            res.send('peticion get');
            
        }
    }else{
        res.status(401).send('No tienes autorización');
    }
    

})


router.get('/:id', async(req, res)=>{

    var headerName =req.headers['token'];
    
    if(headerName && headerName == '123'){
        try{
            const productos = await Producto.find({$or:[
                {CODIGO: req.params.id},
                {SKU: req.params.id}
            ]});
            res.json(productos);
        }catch(err){
            res.send('peticion get')
        }
    }else{
        res.status(401).send('No tienes autorización');
    }

})



module.exports=router;