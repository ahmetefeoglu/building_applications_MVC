var path = require("path");
var fs = require("fs");
var file_path = path.resolve(path.dirname(__dirname), "data/contacts.json");
var Albums = require(path.dirname(__dirname) + "/routes/contacts_node");

function getContacts() {
  return JSON.parse(fs.readFileSync(file_path,"utf8")).data;
}

function nextId() {
  return JSON.parse(fs.readFileSync(file_path,"utf8")).last_id +1;
}

function writeContacts(data) {
  fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
}


var Contacts = {
  get: function() {
    return getContacts();
  },
  set: function(data) {
    writeContacts(data);
  },

  getLastID: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf-8")).last_id;
  }
};

module.exports = Contacts;