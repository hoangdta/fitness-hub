const express = require('express');
require('dotenv').config(); 
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieSession = require('cookie-session');
const routes = require('./routes/index');
const syncDatabase = require('./models');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "fitness-hub-session",
    secret: "COOKIE_SECRET",
    httpOnly: true
  })
);
  
// sync database
syncDatabase();
// router
routes(app);

app.listen(process.env.port, function(error){
    if (error) {
        console.log("Something went wrong");
    }
    console.log("server is running port:  " + process.env.port);
})