const express = require('express')
const categorieController = require('../controllers/categorieControllers')

const routes = express.Router()


routes.post('/', categorieController.createCategorie)
routes.get('/',  categorieController.getCategories)
routes.get('/:id', categorieController.getCategorie)
routes.delete('/:id', categorieController.deleteCategorie)
routes.put('/:id',  categorieController.updateCategorie)




module.exports = routes