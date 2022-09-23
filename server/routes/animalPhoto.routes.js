const AnimalPhotoController = require('../controllers/animalPhoto.controller');
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if((file.mimetype).includes('jpeg') || (file.mimetype).includes('png')){
        cb(null, true);
    } else {
        cb(null, false)
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter, });
// upload.single('animalPhoto');
// export default upload.single("animalPhoto")

module.exports = (app) => {
    
    app.get('/api/animalPhoto', AnimalPhotoController.getAnimalAllAnimalPhotos);
    app.post('/api/animalPhoto', upload.single("animalPhoto"), AnimalPhotoController.addAnimalPhoto);
    // app.post('/api/uploadPhotos', AnimalPhotoController.uploadPhoto);
}