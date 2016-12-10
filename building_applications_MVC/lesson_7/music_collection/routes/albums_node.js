var path = require("path");
var fs = require("fs");
var file_path = path.resolve(path.dirname(__dirname), "data/albums.json");
var Albums = require(path.dirname(__dirname) + "/routes/albums_node");

function getAlbums() {
  return JSON.parse(fs.readFileSync(file_path,"utf8")).data;
}

function nextId() {
  return JSON.parse(fs.readFileSync(file_path,"utf8")).last_id +1;
}

function writeAlbums(data) {
  fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
}


var Albums = {
  get: function() {
    return getAlbums();
  },
  set: function(data) {
    writeAlbums(data);
  },

  getLastID: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf-8")).last_id;
  }
};

module.exports = Albums;