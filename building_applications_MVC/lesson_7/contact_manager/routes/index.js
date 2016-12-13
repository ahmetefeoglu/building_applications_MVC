//var express = require('express');
//var router = express.Router();
var path = require("path");
var fs = require("fs");
var Contacts = require(path.dirname(__dirname) + "/routes/contacts_node");
/* GET home page. */
module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('home', {
      contacts: Contacts.get()
    });
  });
}



