require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require('multer');
const path = require("path")
const fs = require("fs")
const app = express();


app.use(express.json(), express.urlencoded({
    extended: true
}));
app.set("view engine", "ejs")
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// })

// const upload = multer({
//     storage: storage
// })
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(cookieParser());


require('./config/mongoose.config');
require('./routes/happyTailsContact.routes')(app);
require('./routes/user.routes')(app);
require('./routes/animalPhoto.routes')(app);


// app.post("/api/animalPhoto", upload.single("animalPhoto"), (req, res, next) => {
//     console.log(req.file);
//     const absolutePath = path.join(__dirname, req.file.path);
//     const jsonString = fs.readFileSync(absolutePath, "utf-8");
//     console.log(jsonString);
//     // console.warn(xhr.responseText);
//     const jsonObject = JSON.parse(jsonString);
    
//     console.log(jsonObject);
//     res.redirect("/happyTails/users/addContent");
// })

// app.post("/uploadPhoto", upload.single("myImage"), (req, res) => {
//     const obj = {
//         img: {
//             data: fs.readFileSync(path.join(__dirname + "/uploads/" + req.file.filename)),
//             contentType: "image/png"
//         }
//     }
//     const newImage = new ImageModel({
//         image: obj.img
//     });
//     newImage.save((err) => {
//         err ? console.log(err) : res.redirect("/");
//     });
// });

// app.post('/api/animalPhoto', upload.single('image'), (req, res, next) => {
//     var obj = {
//         name: req.body.name,
//         desc: req.body.desc,
//         img: {
//             data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//             contentType: 'image/png'
//         }
//     }
//     imgModel.create(obj, (err, item) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             // item.save();
//             res.redirect('/');
//         }
//     });
// });

app.get("/getPhoto", (req, res) => {
    ImageModel.find({}, (err, images) => {
        if (err) {
            console.log(err);
            res.status(500).send("An error occurred", err);
        } else {
            res.render("index", {
                images: images
            });
        }
    });
});


const port = process.env.PORT
app.listen(port, () => {
    console.log(`Tails are wagging on Port: ${port}`)
});