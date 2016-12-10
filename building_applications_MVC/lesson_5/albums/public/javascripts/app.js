var App = {
  albumsLoaded: function() {
    this.view.render();
  },

  tracksLoaded: function(tracks) {
    console.log("dubidubidu");
    console.log(this.selected_album.toJSON());
    var tracks_modal = new TracksView({
      collection: tracks,
      album: this.selected_album.toJSON()
    });

    tracks_modal.render();

    this.tracks = tracks_modal;
  },

  fetchAlbums: function() {
    this.albums = new Albums();
    this.view = new AlbumsView({collection: this.albums});
    this.albums.fetch({
      success: this.albumsLoaded.bind(this)
    })
  },

  fetchTracks: function(name) {
    
    var tracks = new (Tracks.extend({
      url: "/albums/" + name + ".json"
    }))();

    this.selected_album = this.albums.findWhere({title: name});

    tracks.fetch({
      success: this.tracksLoaded.bind(this)
    });



  },

  init: function() {
    this.fetchAlbums();
  }
};

var Router = Backbone.Router.extend({

  routes: {
    "albums/:name" : "getAlbum"
  },

  getAlbum: function(name) {
    console.log("I am being fucking called");
    App.fetchTracks(name);
  },

  index: function() {
    if (!App.tracks.$el.is(":animated")) {
      App.tracks.fadeOut();
    }

  },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index);
  }
});

var router = new Router();

Backbone.history.start({
  pushState: true,
  silent: true
});

$(document).on("click", "a[href^='/']", function(e) {
  console.log("fuck yeah");
  console.log($(e.currentTarget).attr("href"));
  e.preventDefault();
  router.navigate($(e.currentTarget).attr("href").replace(/^\//, ""), {trigger: true});

})


//<script src = "javascripts/spec/albums_spec.js"></script>