const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const clientRoutes = require('./routes/clientRoutes')
const produitRoutes = require('./routes/produitRoutes')
const categorieRoutes = require('./routes/categorieRoutes')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

DB_CONNECTION_STRING = 'mongodb://localhost/db_customer'
mongoose.connect(DB_CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
})
.then( () => console.log("Connected succesfully to DB"))
.catch( error => console.log(error))




app.use('/customers/clients', clientRoutes)
app.use('/customers/produits',produitRoutes)
app.use('/customers/categories',categorieRoutes)




module.exports = app




