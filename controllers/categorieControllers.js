const Categorie = require("../models/Categorie")


exports.createCategorie = (req, res, next) => {
	const categorie = new Categorie({
		...req.body
	})
	categorie.save()
		.then( () => res.status(200).json(' Categorie enregistre avec succes '))
		.catch( error => res.status(500).json({error}))
}

exports.getCategories = (req, res, next) => {
	Categorie.find()
		.then( v => res.status(200).json(v))
		.catch( error => res.status(500).json({error}))
}

exports.getCategorie = (req, res, next) => {
	Categorie.findOne({_id: req.params.id})
		.then( v => res.status(200).json(v))
		.catch( error => res.status(500).json({error}))
}

exports.deleteCategorie = (req, res, next) => {
	Categorie.deleteOne({_id: req.params.id})
		.then( (categorie) => res.status(201).json(categorie+ 'Categorie deleted successfully'))
		.catch( error => res.status(500).json({error}))
}


exports.updateCategorie = (req, res, next) => {
	Categorie.updateOne({_id: req.params.id}, {  ... req.body})
		.then( () => res.status(201).json('Categorie updated successfully'))
		.catch( error => res.status(500).json({error}))
}