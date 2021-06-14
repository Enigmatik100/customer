const mongoose = require('mongoose')
const {Schema} = mongoose

categorieSchema = new Schema({
    code: {type:String, required:true, unique: true},
    designation: {type:String, required:true}
})
module.exports = mongoose.model('Categorie', categorieSchema)