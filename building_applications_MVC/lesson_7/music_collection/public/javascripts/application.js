var App = {
  templates: JST,
  $el: $("main"),
  

  indexView: function() {
    this.index = new IndexView();
    this.renderAlbums();
    this.bindEvents();
  },

  renderAlbums: function() {
    this.albums.each(this.renderAlbumView);
  },

  renderAlbumView: function(album) {
    /*
    new AlbumView({
      model:album
    });
    */
    new AlbumView(album);
  },

  newAlbum: function() {
    console.log("got rendered");
    new  NewAlbumView();
  },

  bindEvents: function() {
    //We are extending our App object to Backbone obj in order for App object to use event methods
    _.extend(this,Backbone.Events);

    this.listenTo(this.index, "add_album", this.newAlbum);
  }
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
})
