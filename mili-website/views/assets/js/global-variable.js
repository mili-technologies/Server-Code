var express = require("express");
var mysql = require("mysql");
var path = require("path");
var logger = require("morgan");
var ejs = require("ejs");
var context = require("request-context");
//var admin = require("firebase-admin");
var realtime = require("firebase-admin");
//var serviceAccount = require(__dirname+"/firebase_key/mili-b2581-firebase-adminsdk-o60lm-0c430ed0ef.json");
var serviceAccount1 = require(__dirname + "/firebase_key/test-6d54b-firebase-adminsdk-1fxtq-d4815dc7f4.json");
var routes = require("./controllers/admin/admin.js");
// var $ = require('jquery');
const bodyParser = require("body-parser");
const log = require('node-file-logger');
const jwtLogin = require('jwt-login');
const roles = require('user-groups-roles');
var AWS = require('aws-sdk');
AWS.config.loadFromPath('aws_config.json');
var multiparty = require('multiparty');
var http = require('http');
var util = require('util');
var fs = require('file-system');
var session = require('express-session');
// roles.createNewRole('admin');
// roles.createNewRole('editor');
// roles.createNewRole('author');

// roles.createNewPrivileges(['/dashboard',"POST"],"This is dashboard",true);
// roles.createNewPrivileges(['/menu',"GET"],"This is dashboard",true);
// roles.createNewPrivileges(['/kitchen1',"GET"],"This is dashboard",true);

// roles.addPrivilegeToRole('admin',['/kitchen1',"GET"],true)

// routes for kitchen
var kitchenController = require("./controllers/kitchen/kitchenController");

// routes for order
var orderController = require('./controllers/order/orderContriller');

// routes for menu

var menuController = require('./controllers/menu/menuController');

var userController = require('./controllers/users/userController');