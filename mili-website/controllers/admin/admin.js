var express = require("express");

var admin = express();

admin.get("/",function(request,response){
    response.render("mili.admin.ejs");
});

module.exports = admin;