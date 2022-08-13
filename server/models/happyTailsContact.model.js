const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')


const HappyTailsContactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name Required"],
        minlength: [2, "First Name must be at least 2 characters"],
    },
    lastName: {
        type: String,
        required: [true, "Last Name Required"],
        minlength: [2, "Last Name must be at least 2 characters"],
    },
    emailAddress: {
        type: String,
        required: [true, "Email required"],
        validate: {
            validator: val => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "please fill in a valid email address"
        },
        unique: [true, "Email already in contacts"]
    },
}, { timestamps: true});

HappyTailsContactSchema.plugin(uniqueValidator, {message: 'Unique emails please'})
module.exports = mongoose.model('happyTailsContact', HappyTailsContactSchema)