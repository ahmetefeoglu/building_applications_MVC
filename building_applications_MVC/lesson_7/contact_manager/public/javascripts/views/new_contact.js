var newContactView = Backbone.View.extend({
  tagName: "main",
  template: App.templates.new_contact,
  events: {
    'submit': "create"
  },

  initialize: function() {
    this.render();

  },

  render: function() {
    console.log(this.template);
    this.$el.html(this.template());
    console.log("yeahhh");
    App.$el.html(this.$el);
  },

  create: function(e) {
    e.preventDefault();
    
    var $form = $("form");
    $.ajax({
      type: $form.attr("method"),
      url: $form.attr("action"),
      data: $form.serialize(),

      success: function(data) {
        App.contacts.add(data);
        App.renderHomeView();
      }

    })

  }


});