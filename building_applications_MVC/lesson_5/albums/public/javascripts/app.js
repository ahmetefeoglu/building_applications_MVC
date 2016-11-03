var App = {
  

  albumsLoaded: function(collection) {
    console.log(this.albums.toJSON());

  },

  fetchAlbums: function() {
    this.albums = new Albums();

    this.albums.fetch({
      success: albumsLoaded.bind(this);
    });
  },


  init:function() {
    alert("yeahh");
    this.fetchAlbums();

  },
};

App.init();