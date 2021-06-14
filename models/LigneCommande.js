const mongoose = require('mongoose')
const {Schema} = mongoose.Schema

module.exports = mongoose.model(new Schema({

    quantite: Number,
    client_id :
    {
        type: mongoose.Types.ObjectId , 
        ref: 'Client', 
        required: true
    },
    produit_id :
    {
        type: mongoose.Types.ObjectId , 
        ref: 'Produit', 
        required: true
    }
}))