const AnimalForAdoptionController = require('../controllers/animalForAdoptionController');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.get('/api/animalsForAdoption', AnimalForAdoptionController.getAllAnimalsForAdoption);
    app.post('/api/animalsForAdoption', AnimalForAdoptionController.createAnimalForAdoption);
}