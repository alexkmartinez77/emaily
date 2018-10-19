const passport = require('passport');       //a library that gives EXPRESS the idea of how to handle authentication

module.exports = (app) =>{                           //we exporting this function
    app.get(
        '/auth/google',                              // route handler for google authentication
        passport.authenticate('google', {            // 'google' is created by new GoogleStrategy and called here, here we are asking passpord to authenticate using the google strategy
            scope: ['profile', 'email']              // we are asking google to give us access to the users profile info and email scopes
        }));

    app.get('/auth/google/callback', passport.authenticate('google')); //NOW run the call back function; passport strategy see the code in the URL after being redirected back to our server from google, and automatically made followup request with google with the userID provided, google responds with the scope info requested (profile, email)

    app.get('/api/logout', (req, res) => {
        req.logout();                     //req.logout() was added to req during by passport, it kills the cookie in the user's browser
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {  //there is a cookie passing info in req
        res.send(req.user);
    });
};