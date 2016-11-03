
var albums = Backbone.Collection.extend({
  
  model: Album,
  url: "/albums.json"
});
