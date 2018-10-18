const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport'); //not assigned to a variabe like const passport because we are not returning anyting, we just want the code to be available

mongoose.connect(keys.mongoURI); // we pass the address of the mongoose instance created through mlab

const app = express();

app.use(
    cookieSession({                       //cookie takes two arguments maxAge and keys
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]            //its an array in case you want to use multiple keys
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);               //passing the app object created by const app = express(), to the function authroutes that we created and imported

const PORT = process.env.PORT || 5000;      // heroku will dynamically assign ports just as its running applications we have to account for this by setting up var to caputure the environment variable that will be passed
app.listen(PORT, console.log('Server is listening on port http://localhost:5000')); //express is telling node js to listen for traffic on port 5000