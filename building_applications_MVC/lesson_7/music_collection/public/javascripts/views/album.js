var AlbumView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.album,
  render: function() {
    console.log(this.model.id);
    var id = this.model.id;
    this.$el.attr("id", "album_" + id);
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find("ul"));

  },
  initialize: function(model) {
    
    this.model = model;
    this.render();
    this.model.view = this;
    
  },

  
})