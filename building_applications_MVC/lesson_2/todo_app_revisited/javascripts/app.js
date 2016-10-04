
var TodoView = Backbone.View.extend({
  template: Handlebars.compile($("#todos").html()),
  tagName: "li",
  render: function() {
    $("ul").html(template({todos: this.collection.toJSON()}));
  },

  initialize: function() {
    console.log(this.collection);

  },

  addTodo: function(e) {
    if (e.which == 13 && $(e.target).val() !== "") {
      console.log("I am working");
      var $input = $(e.target).val();
      var new_todo = new Todo({input: $input});
      this.collection.add(new_todo);
      console.log(this.collection.toJSON());
    }
  }

})

var Todo = Backbone.Model.extend({
  idAttribute: "id",
  initialize: function() {
    console.log(this.collection.toJSON());
  }
   
})

var Todos = Backbone.Collection.extend({
  model: Todo
});

var todos = new Todos();
console.log(todos.model);
var todos_page = new TodoView({collection: todos});

// Eventss
$("input").on("keyup", todos_page.addTodo.bind(todos_page));
  





