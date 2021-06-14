const mongoose = require("mongoose")
const Produit = require("../models/Produit")
const Categorie = require('../models/Categorie')


exports.createProduit = (req, res) => {
	let produit = new Produit({... req.body});
	delete produit.categorie;
	if(mongoose.Types.ObjectId.isValid(req.body.categorie)){
		Categorie.findOne({_id:req.body.categorie})
		.then(value => {
			produit.categorie = value
			//console.log(value)
			produit.save()
			.then( () => res.status(200).json({message: 'Produit saved successfully !'}))
			.catch(error => res.status(500).json({message:'No categorie with this Id'}))
		})
		.catch(eror => res.status(500).json("Categorie not found"));		
			
	}else{
		res.status(500).json('No categorie with this ID')
	}
}

exports.getProduits = (req, res, next) => {
	Produit.find()
		.populate('categorie')
		.then(value => res.status(200).json(value))
		.catch(error => res.status(500).json({ error }))
}

exports.getProduit = (req, res, next) => {
	Produit.findOne({ _id: req.params.id })
		.populate('categorie')
		.then(v => res.status(200).json(v))
		.catch(error => res.status(500).json({ error }))
}

exports.deleteProduit = (req, res, next) => {
	Produit.deleteOne({ _id: req.params.id })
		.then((prouit) => res.status(201).json(prouit + 'Produit deleted successfully'))
		.catch(error => res.status(500).json({ error }))
}


exports.updateProduit = (req, res, next) => {
	Produit.updateOne({ _id: req.params.id }, { ...req.body })
		.then(() => res.status(201).json('Produit updated successfully'))
		.catch(error => res.status(500).json({ error }))
}

