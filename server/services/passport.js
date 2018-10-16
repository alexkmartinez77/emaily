const passport = require('passport');       //a library that gives EXPRESS the idea of how to handle authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy; //gives EXPRESS the strategy of how to handle authentication for google specifically; we only want strategy out of this module
const keys = require('../config/keys'); // since password and login info is part of the path we hide them in config/keys.js


passport.use(                                   // passport.use tells passport that there is a new strategy that we want it to use other than the default
    new GoogleStrategy({                        // new GoogleStrategy creates a new instance of Google passport Strategy and will be identified as 'google'
        clientID: keys.googleClientID,          // is a public token and id's our app to google servers        
        clientSecret: keys.googleClientSecret,  // is a private key that noone should know about
        callbackURL: '/auth/google/callback'    // the url the user will be redirected to once permisisons are granted by google on their way back from google
    }, 
    (accessToken, refreshToken, profile, done) => {                       // callback anonymous fat arrow function
        console.log('access token:', accessToken);  
        console.log('refresh token:', refreshToken); 
        console.log('profile:', profile);                                        // executed after google responded with scope info
    })
);
