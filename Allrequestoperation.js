 var express = require("express");
 var app = express();

 app.get("/", function(req, res) {
    res.sendfile('index.htm')
 });

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/users', function(req, res) {
    var user_id = req.body.id;
    res.send('Hi'+user_id );
});

app.put('/users', function (req, res) {
  res.send('Got a PUT request at /user')
});

app.delete('/users', function (req, res) {
  res.send('Got a DELETE request at /user')
});


app.listen(8080, function() {
   console.log("Listening on " + 8080);
 });