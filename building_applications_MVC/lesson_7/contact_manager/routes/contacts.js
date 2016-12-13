//var express = require('express');
//var router = express.Router();
var fs = require("fs");
var path = require("path");
var file_path = path.resolve(path.dirname(__dirname), "data/contacts.json");
var Contacts = require(path.dirname(__dirname) + "/routes/contacts_node");


module.exports = function(router) {
  router.get("/contacts/new", function(req,res) {
    console.log("yeahh");
    res.render("new");
  });

  router.post("/contacts", function(req,res) {
    var contact = req.body;
    var contacts = Contacts.get();
    contact.id = Contacts.getLastID() + 1;
    contacts.push(contact);
    Contacts.set({last_id: contact.id, data: contacts});
    res.json(contact);
    res.render("home");
  });
}