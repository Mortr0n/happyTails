// TODO: May need to fix this to add file storage later
const AnimalPhoto = require('../models/animalPhoto.model');
const fs = require("fs");
const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../../uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

const upload = multer({
    storage: storage
})

module.exports = {

    getAllAnimalPhotos: (req, res) => {
        AnimalPhoto.find()
            .then((allPhotos) => {
                res.json(allPhotos)
            })
            .catch(err => res.status(400).json("Error in getting photos with controller ", err))
    },
    
    // app.post("/api/animalPhoto", upload.single("animalPhoto"), (req, res, next) => {
    //     console.log(req.file);
    //     const absolutePath = path.join(__dirname, req.file.path);
    //     const jsonString = fs.readFileSync(absolutePath, "utf-8");
    //     console.log(jsonString);
    //     // console.warn(xhr.responseText);
    //     const jsonObject = JSON.parse(jsonString);
        
    //     console.log(jsonObject);
    //     res.redirect("/happyTails/users/addContent");
    // })
    
    addAnimalPhoto: (req, res) => {
        console.log(req.file)
        const absolutePath = path.join(__dirname, req.file.path);
        const jsonString = fs.readFileSync(absolutePath, "utf-8");
        const jsonObject = JSON.parse(jsonString);
        AnimalPhoto.create(jsonObject, (err, final_image) => {
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
}




