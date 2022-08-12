const happyTailsContactController = require('../controllers/happyTailsContact.controller');
const ContactController = require('../controllers/contact.controller');

module.exports = (app) => {
    // app.get('/api', happyTailsContactController.index);
    // app.post('/api/contact', ContactController.createContact);
    app.get('/api/htContacts', happyTailsContactController.getAllHappyTailsContacts);
    app.post('/api/htContacts', happyTailsContactController.createHappyTailsContact);
    app.get('/api/htContacts/:id', happyTailsContactController.getOneHappyTailsContact);
    app.put('/api/htContacts/:id', happyTailsContactController.updateOneHappyTailsContact);
    app.put('/api/contact/:id', ContactController.updateContact);
    app.delete('/api/htContacts/:id', happyTailsContactController.deleteOneHappyTailsContact);
}