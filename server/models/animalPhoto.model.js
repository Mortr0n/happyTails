const mongoose = require('mongoose');

const AnimalPhotoSchema = new mongoose.Schema({
    animalPhotoTitle: {
        type: String,
        required: [true, "Please enter a title for the photo"],
        minlength: [2, "Title must be at least 2 characters"]
    },

    animalPhotoDescription: {
        type: String,
        required: [true, "Your photo must include a description"],
        minlength: [5, "Description must be at least 5 characters"],
        maxlength: [500, "Description must be less than 500 characters"]
    },

    animalPhoto: {
        data: Buffer, 
        contentType: String
    }

});

const AnimalPhoto = mongoose.model('AnimalPhoto', AnimalPhotoSchema);
module.exports = AnimalPhoto;