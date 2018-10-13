const express = require('express');     //require in the express library
const app = express();                 // express() creates an 'app' object that represents a running express app; app is used to configure our routes

app.get('/', (req, res) => {           // lines 4-6 represent a route handler
    res.send({hi: 'bye buddy'});
});

const PORT = process.env.PORT || 5000;  // heroku will dynamically assign ports just as its running applications we have to account for this by setting up var to caputure the environment variable that will be passed
app.listen(PORT, console.log('Server is listening on port http://localhost:5000')); //express is telling node js to listen for traffic on port 5000