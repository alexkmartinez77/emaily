const express = require('express');         //require in the express library
const passport = require('passport');       //a library that gives EXPRESS the idea of how to handle authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy; //gives EXPRESS the strategy of how to handle authentication for google specifically; we only want strategy out of this module
const keys = require('./config/keys');

const app = express();                          // express() creates an 'app' object that represents a running express app; app is used to configure our routes

passport.use(                                   // passport.use tells passport that there is a new strategy that we want it to use other than the default
    new GoogleStrategy({                        // new GoogleStrategy creates a new instance of Google passport Strategy and will be identified as 'google'
        clientID: keys.googleClientID,          // is a public token and id's our app to google servers        
        clientSecret: keys.googleClientSecret,  // is a private key that noone should know about
        callbackURL: '/auth/google/callback'    // the url the user will be redirected to once permisisons are granted by google on their way back from google
    }, (accessToken) => {                       // callback anonymous fat arrow function
        console.log(accessToken);               
    })
);                                        

app.get(
    '/auth/google',
     passport.authenticate('google', {          // 'google' is created by new GoogleStrategy
         scope: ['profile', 'email']              //// we are asking google to give us access to the users profile info and email scopes
     }));
      
//route handler example
// app.get('/', (req, res) => {             // lines 4-6 represent a route handler
//     res.send({hi: 'bye buddy'});
// });

const PORT = process.env.PORT || 5000;      // heroku will dynamically assign ports just as its running applications we have to account for this by setting up var to caputure the environment variable that will be passed
app.listen(PORT, console.log('Server is listening on port http://localhost:5000')); //express is telling node js to listen for traffic on port 5000