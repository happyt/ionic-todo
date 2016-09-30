var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var request = require("request");

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var errorReply = {
    status:"error",
    datafield: "Quick brown fox"
}

app.get("/neverno", function(req, res) { 
    var url = 'http://storyskynews.never.no/xml/feed/story_dev.json';

    request({
        url: url, //URL to hit
        qs: {from: 'neverno feed', time: +new Date()}, //Query string data
        method: 'GET', //Specify the method
        headers: { //We can define headers too
            'Content-Type': 'MyContentType',
            'Custom-Header': 'Custom Value'
        }
    }, function(error, response, body){
        if(error) {
  //          console.log("error: ", error);
            errorReply.datafield = error;
            res.status(200).json(JSON.stringify(errorReply))
        } else {
 //           console.log("Returned here...");
              var bb;
              try {
                  bb = JSON.parse(body);
                  res.status(200).json(JSON.stringify(bb.entries));
              } catch (e) {
                  errorReply.datafield = "Not valid JSON";
                  res.status(200).json(JSON.stringify(errorReply))
              }
        }
    });
});
// web port
var PORT = process.env.PORT || 8080; 
//
//=======================
// Initialize the app.
//
var server = app.listen(PORT, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

