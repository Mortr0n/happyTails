const AnimalForAdoption = require('../models/animalForAdoption');
const jwt = require('jsonwebtoken');
const { populate } = require('../models/animalPhoto.model');

module.exports = {

    createAnimalForAdoption: (req, res) => {
        const newAnimal = new AnimalForAdoption(req.body);
        const decodedJWT = jwt.decode(req.cookies.usertoken,
            {complete: true});
            // make sure to decode user_id from the cookie
        newAnimal.userId = decodedJWT.payload.user_id;
        AnimalForAdoption.create(newAnimal)
            .then((newlyCreatedAnimal) => {
                console.log("New Animal ", newlyCreatedAnimal);
                res.json(newlyCreatedAnimal);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },

    getAllAnimalsForAdoption: (req, res) => {
        AnimalForAdoption.find()
            .then((allAnimals) => {
                console.log("Animal List ", allAnimals);
                res.json(allAnimals);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },
    
}