const express = require('express')
const produitController = require('../controllers/produitControllers')

const routes = express.Router()


routes.post('/', produitController.createProduit)
routes.get('/',  produitController.getProduits)
routes.get('/:id', produitController.getProduit)
routes.delete('/:id', produitController.deleteProduit)
routes.put('/:id',  produitController.updateProduit)




module.exports = routes