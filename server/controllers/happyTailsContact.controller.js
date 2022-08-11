const { response } = require('express');
const happyTailsContact = require('../models/happyTailsContact.model');

module.exports = {
    index: (req, res) => {
        res.json({ message: "Happy Tails"});
    },
    createHappyTailsContact: (req, res) => {
        happyTailsContact.create(req.body)
            .then((newContact) => res.json("New Contact ", newContact))
            .catch(err => res.status(400).json("Error Creating new contact in controller ", err));
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
        happyTailsContact.findById({ _id: req.params.id })
            .then((oneContact) => {
                console.log("One Contact ", oneContact)
            })
            .catch(err => res.status(400).json("Controller error get one contact ", err));
    },
    updateOneHappyTailsContact: (req, res) => {
        happyTailsContact.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then((updatedContact) => {
                console.log("Updated contact ", updatedContact);
                res.json(updatedContact);
            });
    },
    deleteOneHappyTailsContact: (req, res) => {
        happyTailsContact.findByIdAndDelete({ _id: req.params.id })
            .then((deletedContact) => {
                console.log("Deleted Contact ", deletedContact);
                res.json(deletedContact);
            })
            .catch(err => res.status(400).json("Controller error delete one contact", err));
    },

}