
var path = require("path");
var fs = require("fs");
var _ = require("underscore");
var file_path = path.resolve(path.dirname(__dirname), "data/albums.json");
var Albums = require(path.dirname(__dirname) + "/routes/albums_node");
/*
function put() {

}

function delete() {

}
*/
module.exports = function(router) {
  router.post("/albums", function(req,res) {
    var album = req.body,
        albums = Albums.get();
    album.id = Albums.getLastID() + 1;
    albums.push(album);
    Albums.set({last_id: album.id, data: albums});
    res.json(album);
  });

  router.post("/albums/update")
  router.get("/albums/new", function(req,res) {
    res.render("new");
  
  });
}



