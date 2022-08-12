const Contact = require('../models/happyTailsContact.model');

// module.exports.createContact = (req, res) => {
//     Contact.create(req.body)
//         .then(contact => res.json(contact) )
//         .catch(err => res.json(err));
// }

module.exports.updateContact = (req, res) => {
    Contact.findByIdAndUpdate(
        req.params.id ,
        req.body,
        { new: true, runValidators: true }
    )
    .then((updatedContact) => {
        console.log(updatedContact);
        res.json(updatedProduct);
    })
    .catch((err) => res.status(400).json(err))
}

