Handlebars.registerPartial("item", $("#item").html());

var App = {
  $body: $("tbody"),
  template: Handlebars.compile($("#items").html()),

  render: function() {
    console.log("yeahhh");
    this.$body.html(this.template({
      items: this.Items.models
    }));
  },

  removeItem: function(e) {
    e.preventDefault();
    var model = this.Items.get(+$(e.target).attr("data-id"));
    this.Items.remove(model);
    this.render();
  },

  addModel: function(e) {
    e.preventDefault();
    
  },

  bind: function() {
    this.$body.on("click","a",this.removeItem.bind(this));
    
  },

  init: function() {
    this.Items = new ItemsCollection(items_json);
    console.log(this.Items.toJSON());
    this.Items.sortByName();
    this.render();
    this.bind();

  }


};

var ItemModel = Backbone.Model.extend({
  idAttribute: "id",
  initialize: function() {
    this.collection.nextId();
    this.set("id",this.collection.last_id);
  }
});

var ItemsCollection = Backbone.Collection.extend({
  model: ItemModel,
  last_id: 0,
  sortBy: function(prop) {
    this.models = _(this.models).sortBy(function(m)  {
      return m.attributes[prop];
    })
    App.render();
  },
  setLastId: function() {
    if (this.isEmpty()) {
      return;
    }
    this.last_id = this.last().get("id");   
  },

  nextId: function() {
    return this.last_id++;
  },

  sortByName: function() {
    this.sortBy("name");
  },

  initialize: function() {
    this.on("sync",this.setLastId);
    this.on("add", this.sortByName);
    this.on("remove reset",App.render.bind(App));

  },

  render: function() {
    $("tbody").html(template({items: items.collection}));
  },
});

$("form").on("submit",function(e) {
  e.preventDefault();
  var input = $(e.target).serializeArray();
  var attrs = {};
  input.forEach(function(attr) {
    attrs[attr.name] = attr.value;
  })
  App.Items.add(attrs);
})

$("p a").on("click",function(e) {
  e.preventDefault();
  App.Items.reset();

})

$("th").on("click",function(e) {
  var prop = $(this).attr("data-prop");
  App.Items.sortBy(prop);
})
  

App.init();





