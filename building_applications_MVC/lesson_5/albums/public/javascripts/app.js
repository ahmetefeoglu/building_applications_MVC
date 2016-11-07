var App = {
  

  albumsLoaded: function(collection) {
    console.log(this.albums.toJSON());

  },

  fetchAlbums: function() {
    this.albums = new Albums();

    this.albums.fetch({
      success: this.albumsLoaded.bind(this)
    });
  },


  init:function() {
    this.fetchAlbums();
  },
};

App.init();