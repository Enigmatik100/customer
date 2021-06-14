const Client = require("../models/Client")


exports.createClient = (req, res, next) => {
	const client = new Client({
		...req.body
	})
	client.save()
		.then( () => res.status(200).json(' Client enregistre avec succes '))
		.catch( error => res.status(500).json({error}))
}

exports.getClients = (req, res, next) => {
	Client.find()
		.then( v => res.status(200).json(v))
		.catch( error => res.status(500).json({error}))
}

exports.getClient = (req, res, next) => {
	Client.findOne({_id: req.params.id})
		.then( v => res.status(200).json(v))
		.catch( error => res.status(500).json({error}))
}

exports.deleteClient = (req, res, next) => {
	Client.deleteOne({_id: req.params.id})
		.then( (client) => res.status(201).json(client+ 'Client deleted successfully'))
		.catch( error => res.status(500).json({error}))
}


exports.updateClient = (req, res, next) => {
	Client.updateOne({_id: req.params.id}, {  ... req.body})
		.then( () => res.status(201).json('Client updated successfully'))
		.catch( error => res.status(500).json({error}))
}

