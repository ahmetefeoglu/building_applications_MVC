var $overlay = $("#overlay");
var TracksView = Backbone.View.extend({
  duration: 300,
  template: Handlebars.compile($("[data-name='tracks']").html()),
  attributes: {
    id: "tracks_modal"
  },

  events: {
    "click a.close": "close",
  },

  initialize: function(options) {
    this.album = options.album;
    this.$el.appendTo(document.body);

  },

  render: function() {
    console.log(this.$el);
    console.log(this.collection.toJSON);
    console.log(this.album);
    this.$el.html(this.template({
      tracks: this.collection.toJSON(),
      album: this.album
    }));
    this.open();
  },

  

  open: function() {
    this.$el.add($overlay).fadeIn(this.duration);
  },

  close: function(event) {
    event.preventDefault();
    this.fadeOut();
    history.back();
  },

  fadeOut: function() {
    $overlay.fadeOut(this.duration);
    this.$el.fadeOut(this.duration, function() {
      this.remove();
    }.bind(this));
    
  }
});

/*
new TracksView({
  album: App.albums.first()
});

*/
//This is how  you will create  a trakview constructor 

/*

//As you can see  you  put in an object to argument and to access to it's value you must call it's 
// "album" property.
new TracksView({
  album: App.albums.first();
})

*/