const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/happyTails', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established connection between DB(Dog Butt) and tail.'))
    .catch(err => console.log('Something has gone wrong in the connection between the DB(Dog Butt) and tail', err));
