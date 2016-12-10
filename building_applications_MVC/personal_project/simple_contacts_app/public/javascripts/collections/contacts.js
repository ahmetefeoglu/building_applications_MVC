var Contacts = Backbone.Collection.extend({
  model: Contact,
  nextId: this.length,
  localStorage: new Backbone.LocalStorage("contacts"),
  
});