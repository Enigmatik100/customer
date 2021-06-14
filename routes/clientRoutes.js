const express = require('express')
const clientController = require('../controllers/clientController')

const routes = express.Router()


routes.post('/', clientController.createClient)
routes.get('/',  clientController.getClients)
routes.get('/:id', clientController.getClient)
routes.delete('/:id', clientController.deleteClient)
routes.put('/:id',  clientController.updateClient)




module.exports = routes