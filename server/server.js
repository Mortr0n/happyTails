require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require("cookie-parser");


app.use(express.json(), express.urlencoded({extended: true}));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(cookieParser());


require('./config/mongoose.config');
require('./routes/happyTailsContact.routes')(app)
require('./routes/user.routes')(app)



const port = process.env.PORT
app.listen(port, () => {console.log(`Tails are wagging on Port: ${port}`)});
