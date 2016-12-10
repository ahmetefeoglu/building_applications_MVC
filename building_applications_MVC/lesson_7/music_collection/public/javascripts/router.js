var router = new (Backbone.Router.extend({
  initialize: function() {
    this.route(/\/?$/, "index", this.index);
  },

  index: function() {
    App.indexView();
  },

  routes: {
    "albums/new": App.newAlbum(),

  }
}))();

Backbone.history.start({
  pushState: true,
});

$(document).on("click", "a[href^='/']", function(e) {
  e.preventDefault();

  //We get the href of  anchor element and remove the first "/" because Backbone already assumes it has one at the beginning
  //We then  use  trigger:true  to push our state.
  router.navigate($(e.currentTarget).attr("href").replace(/^\//, ""), { trigger: true})
});