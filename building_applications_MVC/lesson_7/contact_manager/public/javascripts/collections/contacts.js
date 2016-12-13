var Contacts = Backbone.Collection.extend({
  model: Contact,
  url: "/contacts",
  initialize: function() {
    alert("My length" + this.length);
  }
})