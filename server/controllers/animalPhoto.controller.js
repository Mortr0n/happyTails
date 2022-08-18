// TODO: May need to fix this to add file storage later
const AnimalPhoto = require('../models/animalPhoto.model');
const fs = require("fs");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

const upload = multer({ storage: storage })

const getAnimalAllAnimalPhotos = (req, res) => {
    AnimalPhoto.find()
        .then((allPhotos) => {
            res.json(allPhotos)
        })
        .catch(err => res.status(400).json("Error in getting photos with controller ", err))
}

const addAnimalPhoto = (req, res) => {
    console.log(req.body)
    const image = fs.readFileSync(req.file.path);
    const encode_image = image.toString('base64');
    var final_image = {
        contentType: req.file.mimetype,
        image: new Buffer(encode_image, 'base64')
    };    
    AnimalPhoto.create(final_image, function(err, result){
        if(err) {
            console.log("Error with the create part of controller ", err)
        } else {
            console.log(result.image.Buffer);
            console.log("Saved to DB");
            res.contentType(final_image.contentType);
            res.send(final_image.image)
        }
    })
}

module.exports = {
    getAnimalAllAnimalPhotos,
    addAnimalPhoto,
}