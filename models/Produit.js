const mongoose = require('mongoose')
const {Schema} = mongoose

produitSchema = new Schema({
    designation: {type:String, required:true},
    code: {type:String, required:true, unique: true},
    prix : {type:Number, required:true},
    categorie :
    {
        type: mongoose.Types.ObjectId , 
        ref: 'Categorie', 
        required: true
    },
    image : String
})

module.exports = mongoose.model('Produit', produitSchema)