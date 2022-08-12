const { response } = require('express');
const happyTailsContact = require('../models/happyTailsContact.model');

module.exports = {
    index: (req, res) => {
        res.json({ message: "Happy Tails"});
    },

    createHappyTailsContact: (req, res) => {
        happyTailsContact.create(req.body)
            .then(contact => res.json(contact))
            .catch(err => res.json(err))
    },

    getAllHappyTailsContacts: (req, res) => {
        happyTailsContact.find()
            .then((allContacts) => {
                console.log("All Contacts ", allContacts);
                res.json(allContacts);
            })
            .catch(err => res.status(400).json("Controller error get all contacts ", err));
    },

    getOneHappyTailsContact: (req, res) => {
        happyTailsContact.findOne({ _id: req.params.id })
            .then(contact => res.json(contact))
            .catch(err => res.status(400).json(err))
    },

    updateOneHappyTailsContact: (req, res) => {
        happyTailsContact.findByIdAndUpdate(
            { _id: req.params.id }, 
            req.body,
            { new: true, runValidators: true },
            )
            .then(contact => res.json(contact))
            .catch(err => res.json(err))
    },

    deleteOneHappyTailsContact: (req, res) => {
        happyTailsContact.findByIdAndDelete({ _id: req.params.id })
            .then(DeletedContact => res.json(DeletedContact))
            .catch(err => res.json(err))
    }

}