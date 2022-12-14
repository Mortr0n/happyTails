require("dotenv").config();
const express = require('express');
const cors = require('cors');
// const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const multer = require('multer');
const path = require("path")
// const fs = require("fs")
const app = express();
// const fileRoutes = require('./routes/fileUpload.routes')

app.use(express.json({limit: '50mb'}), express.urlencoded({
    extended: true,
    limit: '50mb',
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(cookieParser());


//FIXME: I already have api stuff so I went with uploadAPI we'll see if this screws it all up
// app.use('/api', fileRoutes.routes);


require('./config/mongoose.config')();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
require('./routes/animalForAdoption.routes')(app);
require('./routes/user.routes')(app);


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Tails are wagging on Port: ${port}`)
});