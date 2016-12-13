var router = new (Backbone.Router.extend({
  initialize: function() {
    this.route(/^\/?$/, "home", this.home)
  },

  home: function() {
    App.renderHomeView();
    alert("I am getting rendered");
  },
  routes: {
    "contacts/new": App.newContact(),
  }
  
}))();

Backbone.history.start({
  pushState: true
});


$(document).on("click", "a[href^='/']", function(e) {
  e.preventDefault();
  var route_path = $(e.currentTarget).attr("href").replace(/^\//, "");
  router.navigate(route_path, { trigger: true });
});