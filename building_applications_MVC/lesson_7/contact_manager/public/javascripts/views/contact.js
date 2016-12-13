var ContactView = Backbone.View.extend({
  template: App.templates.contact,
  tagName: "li",
  initialize: function() {
    this.render();
    this.model.view = this;
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find("ul"));
  }
})