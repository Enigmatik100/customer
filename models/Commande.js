const mongoose = require('mongoose')
const {Schema} = mongoose.Schema

module.exports = mongoose.model('Commande',new Schema({
    lignesCommandes : [],
    dateCommande: Date
}))