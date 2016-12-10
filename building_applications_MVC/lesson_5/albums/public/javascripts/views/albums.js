var AlbumsView = Backbone.View.extend({
  template: Handlebars.compile($("[data-name=albums]").html()),
  
  render: function() {
    console.log(this.collection.toJSON());
    this.$el.html(this.template({albums: this.collection.toJSON() }));
  },

  initialize: function() {
    
    this.$el = $("#albums");
    this.listenTo(this.collection, "change", this.render);
  },

  

  

   
  //albums argument will be passed when we create a view object with an argument of our collection "albums"
  


});

