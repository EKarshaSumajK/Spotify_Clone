var express = require("express");
var bodyParser = require("body-parser");


var app = express();
app.use(express.static('public'))


app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
})





app.listen(3000,function(req,res){
    console.log("server is running on 3000")
})
