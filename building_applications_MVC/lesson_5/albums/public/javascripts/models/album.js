//You don't understand this part ask!!!!

var Album = Backbone.Model.extend({
  parse: function(attrs) {
    console.log(attrs);
    attrs.tracks_url = "/albums/" + attrs.title;

    return attrs;
  }
})