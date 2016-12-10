/*
Create a Backbone view for NewAlbumView.
Create a Handlebars template from the new album Jade view.
In the render method, replace the contents of the page with the new album form.
On submit, send the form via AJAX. The returned data is added to the collection so it gets rendered when the index view is rendered.
*/

var NewAlbumView = Backbone.View.extend({
  tagName: "main",
  template: App.templates.new_album,
  attributes: {
    id: "album_new"
  },

  events: {
    "submit": "create"
  },
  
  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);

  },

  initialize: function() {
  this.render();
  },

  create: function(e) {
    e.preventDefault();

    //We use "this" to navigate through DOM within particular view.
    //We navigate only in the view that "this" refers to.
    var $f = this.$("form");
    $.ajax({
      type: $f.attr("method"),
      url: $f.attr("action"),
      data: $f.serialize(),
      success: function(json) {
        App.albums.add(json);
        App.indexView();
      }
    });


  }



});