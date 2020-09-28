const mongoose= require('mongoose');

const productoSchema = new mongoose.Schema({
    CODIGO:{
        type: String,
        required: true
    },
    SKU:{
        type: String,
        required: true
    },
    Descripcion:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model('productos',productoSchema); 