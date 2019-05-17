//importing node framework
var express = require('express');
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
    console.log("This is the debug test new with more details.")
    res.send('hey world version 2');
});
//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;