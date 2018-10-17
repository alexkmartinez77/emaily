const mongoose = require('mongoose'); //requiring the mongoose library
const { Schema } = mongoose;          //defining the mongoose.Schema function as a variable

const userSchema = new Schema({       //creating our first schema
    googleId: String                  //creating list of properties each record can have, can add and remove properties as we see fit
});

mongoose.model('users', userSchema);  //a function that creates a new model class, 'users' is the name of the collection, userSchema is the schema (properties)
                                      //loads a schema into mongoose and calls it 'users'