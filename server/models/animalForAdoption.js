const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnimalForAdoption = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be at least 3 characters"],
        maxLength: [100, "Name must be less than 100 characters"]
    },
    dog: {
        type: Boolean,
        default: true,
    },
    breed: {
        type: String,
        required: [true, "Must input breed"],
        minLength: [3, "Must be at least 3 characters"],
        maxLength: [50, "Must be less than 50 characters"],
    },
    coatLength: {
        type: String,
        required: [true, "Must input coat length"],
        minLength: [3, "Must be at least 3 characters"],
        maxLength: [50, "Must be less than 50 characters"],
    },
    houseTrained: {
        type: Boolean,
        default: false
    },
    vaccinationsUpToDate: {
        type: Boolean,
        default: false
    },
    spayedOrNeutered: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
        minLength: [5, "Must be atleast 5 characters"],
        maxLength: [500, "Must be less than 500 characters"]
    },
    animalPhoto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SingleFile"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

module.exports = mongoose.model('AnimalForAdoption', AnimalForAdoption);