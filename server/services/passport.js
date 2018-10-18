const passport = require('passport');       //a library that gives EXPRESS the idea of how to handle authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy; //gives EXPRESS the strategy of how to handle authentication for google specifically; we only want strategy out of this module
const mongoose = require('mongoose');
const keys = require('../config/keys'); // since password and login info is part of the path we hide them in config/keys.js

const User = mongoose.model('users');   //pulls the schema out of mongoose with just one argument, 'users'

passport.use(                                   // passport.use tells passport that there is a new strategy that we want it to use other than the default
    new GoogleStrategy({                        // new GoogleStrategy creates a new instance of Google passport Strategy and will be identified as 'google'
        clientID: keys.googleClientID,          // is a public token and id's our app to google servers        
        clientSecret: keys.googleClientSecret,  // is a private key that noone should know about
        callbackURL: '/auth/google/callback'    // the url the user will be redirected to once permisisons are granted by google on their way back from google
    },
        (accessToken, refreshToken, profile, done) => {                       // callback anonymous fat arrow function
            User.findOne({ googleId: profile.id })                            // this query returns a promise
                .then((existingUser) => {
                    if (existingUser) {
                        //we already have a record with the given profilfe ID, so do nothing
                        done(null, existingUser); // null means there is no error, 2nd argument is the user record
                    } else {
                        //we don't have a user record with this ID, so make one
                        new User({ googleId: profile.id })                           //creating a model instance, .save will save it to the database
                            .save()
                            .then(user => done(null, user));                                //user is the user that was just saved
                    }
                })
        }
    )
);
