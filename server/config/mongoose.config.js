const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost/happyTailsPhotoUploadsDB', {
    // these are no longer necessary they are always assumed true and useFindAndModify is false so Imight have to figure that out 
    // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: true,
    })
    .then(() => console.log('Established connection between DB(Dog Butt) and tail.'))
    .catch(err => console.log('Something has gone wrong in the connection between the DB(Dog Butt) and tail', err));
}
