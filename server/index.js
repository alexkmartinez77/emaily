const express = require('express'); //require in the express library
const app = express();              // express() creates an 'app' object that represents a running express app; app is used to configure our routes

app.get('/', (req, res) => {         // lines 4-6 represent a route handler
    res.send({hi: 'there post'});
});

app.listen(5000, console.log('Server is listening on port http://localhost:5000'));