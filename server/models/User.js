const mongoose = require('mongoose');
const { Schema } = mongoose;    //creating list of properties each record can have

const userSchema = new Schema({
    googleId: String              //can add and remove properties as we see fit
});

mongoose.model('users', userSchema); //creates a new model class, 'users' is the name of the collection, userSchema is the schema (properties)
