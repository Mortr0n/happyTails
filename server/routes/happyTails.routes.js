const happyTailsController = require('../controllers/happyTails.controller');

module.exports = (app) => {
    app.get('/api', happyTailsController.index);
}