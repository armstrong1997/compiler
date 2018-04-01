var express = require("express");
var HackerRank = require('machinepack-hackerrank');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendfile("index.html");
});

app.post('/save', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
  var code = req.body.code; 
  var lang = req.body.lang; 
  console.log(code);

  var output;
  
HackerRank.submit({
apiKey: 'hackerrankapikey',
source: code,
language: lang,
testcases: ["1"],
wait: true,
format: 'json',
}).exec({

error: function (err) {
 
},
success: function (data) {
	data=JSON.parse(data);
 console.log(data.result);
 console.log(data.result.stdout);
output=data;
//JSON.stringify(data);
  res.end(JSON.stringify(output))
 },
});




;
});
app.listen(3000, function() {
  console.log("Started on PORT 3000");
})
