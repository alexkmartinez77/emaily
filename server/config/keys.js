// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') { //we are in production - return the production set of keys
    module.exports = require('./prod');    //when our server is deployed to heroku an environment variable exists called NODE_ENV which tells us if we are running in production or not
} else {                                   //we are in development and on our local machine - return the dev keys
    module.exports = require('./dev')
}