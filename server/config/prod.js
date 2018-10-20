//prod.js - production keys here
module.exports = {                                                                              
    googleClientID: process.env.GOOGLE_CLIENT_ID,             //'process.env'means find out environment variables
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,     //the '_' underscores are just a convention to follow                                      
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
}