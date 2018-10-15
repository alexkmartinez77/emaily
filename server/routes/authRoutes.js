const passport = require('passport');       //a library that gives EXPRESS the idea of how to handle authentication

module.exports = (app) =>{                           //we exporting this function
    app.get(
        '/auth/google',                              // route handler for google authentication
        passport.authenticate('google', {            // 'google' is created by new GoogleStrategy
            scope: ['profile', 'email']              // we are asking google to give us access to the users profile info and email scopes
        }));

    app.get('/auth/google/callback', passport.authenticate('google')); //passport strategy saw the code in the URL after being reirected back to our server from google, and authomatically made followup request with google with the userID provided, google responds with the scopr info requested (profile, email)
};