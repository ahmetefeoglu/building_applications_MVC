var App = {
  templates:JST,
  $el: $("main"),

  renderHomeView: function() {
    console.log(this);
    this.homeView = new homeView();
    this.renderContacts();
    this.bindEvents(); 
    
   
  },
  renderContacts: function() {
    console.log(App.contacts);
    this.contacts.each(this.renderContactView);
  },

  renderContactView: function(contact) {
    new ContactView({ model:contact });  
  },

  bindEvents: function() {
    _.extend(this, Backbone.Events);
    console.log("Of course I am listeneihng");
    this.listenTo(this.homeView, "add_contact", this.newContact);
  },

  newContact: function() {
    console.log("yeahhhh");
    new newContactView();
  }

  



};