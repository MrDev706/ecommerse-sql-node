
const express = require('express');
var bodyParser = require('body-parser'); 
const multer = require('multer');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');


const {mysqlConnection} = require('./db')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Connection Established Successfully');
    else
    console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    });


// mongoose.connect("mongodb+srv://ddutta706:Kp9AhM76EvHSQyYk@cluster0.levfaad.mongodb.net/college-inters", {
//     useNewUrlParser: true
// }).then(() => console.log("mongdb conection succsesfull"))
// .catch(err => console.log(err))

app.use('/', route);
app.use(multer().any())


app.listen(process.env.PORT || 3001, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});

