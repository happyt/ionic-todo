var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var request = require("request");

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// web port
var PORT = process.env.PORT || 8081; 
//
//=======================
// Initialize the app.
//
var server = app.listen(PORT, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

