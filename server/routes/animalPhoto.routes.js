const AnimalPhotoController = require('../controllers/animalPhoto.controller');

module.exports = (app) => {
    app.get('/api/animalPhoto', AnimalPhotoController.getAnimalAllAnimalPhotos);
    app.post('/api/animalPhoto', AnimalPhotoController.addAnimalPhoto);
    app.post('/api/uploadPhoto', AnimalPhotoController.uploadPhoto);
}