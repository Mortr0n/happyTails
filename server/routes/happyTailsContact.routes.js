const happyTailsContactController = require('../controllers/happyTailsContact.controller');

module.exports = (app) => {
    app.get('/api', happyTailsContactController);
}