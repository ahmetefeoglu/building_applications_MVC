var AlbumList = Backbone.View.extend({
  template: Handlebars.compile($("#albums_template").html()),
  tagName: "li",

   
  //albums argument will be passed when we create a view object with an argument of our collection "albums"
  initialize: function(albums) {
    this.$el = $("#albums");
    this.collection = albums;
    this.listenTo(this.collection, "change", this.render);
  },

  render: function() {
    this.$el.html(this.template({albums: this.collection.toJSON()}))
  }

});