var template = Handlebars.compile($("#items").html());

Handlebars.registerPartial("item", $("#item").html());

var ItemModel = Backbone.Model.extend({
  idAttribute: "id"
});

var items = {
  $body: $("tbody"),
  collection: [],
  seedCollection: function() {
    items_json.forEach(this.create.bind(this));
  },

  create: function(item_data) {
    item_data.id = this.collection.length + 1;
    var item = new ItemModel(item_data);
    this.addToCollection(item);
  },

  addToCollection: function(item) {
    this.collection.push(item);
  },

  addFromForm: function(e) {
    e.preventDefault();
    var $form = $(e.target);
    var inputs = $form.serializeArray();
    var attrs = {};
    inputs.forEach(function(input) {
      attrs[input.name] = input.value;
    })
    this.create(attrs);
    this.render();
    
  },

  sortCollection: function(e) {
    e.preventDefault();
    var chosen_property = $(e.target).attr("data-prop");
    this.collection = _(this.collection).sortBy(function(m) {
      return m.attributes[chosen_property];
    })
    this.render();
  },

  render: function() {
    console.log(this.collection);
    this.$body.html(template({
      items: this.collection
    }));
  },

  remove: function(e) {
    e.preventDefault();
    var $el = $(e.target);
    var id =  +$el.attr("data-id");
    var model = _(this.collection).findWhere({id : id});
    this.collection = _.without(this.collection, model);

    this.render();
  },

  reset: function(e) {
    e.preventDefault();
    console.log("fck yeah");
    this.collection = [];
    this.render();
  },

  init: function() {
    this.seedCollection();
    this.render();
    this.bindings();
  },



  bindings: function() {
    $("tbody").on("click", "a", this.remove.bind(this));
    $("form").on("submit", this.addFromForm.bind(this));
    $("p").on("click","a", this.reset.bind(this));
    $("thead").on("click", "th", this.sortCollection.bind(this));
  }
}



items.init();



