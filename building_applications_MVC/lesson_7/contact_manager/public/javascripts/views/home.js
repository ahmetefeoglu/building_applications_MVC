var homeView = Backbone.View.extend({
  template: App.templates.home,
  events: {
    "click a.add": "addContact"
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  
  //Trigger the event of "add_contact in our applciation.js file"
  addContact: function(e) {
    e.preventDefault();
    this.trigger("add_contact");
  }
})