
var path = require("path");
var fs = require("fs");
var Albums = require(path.dirname(__dirname) + "/routes/albums_node");

//This is our albums  path, so we can read our json data
var file_path = path.resolve(path.dirname(__dirname), "data/albums.json");


function getAlbums() {
  return JSON.parse(fs.readFileSync(file_path,"utf8")).data;
}



/* GET home page. */

module.exports = function(router) {

  router.get('/', function(req, res, next) {
    res.render('index', {
      albums: Albums.get()
    });
  });

}


