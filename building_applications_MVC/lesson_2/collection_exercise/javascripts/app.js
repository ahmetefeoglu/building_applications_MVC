var User = Backbone.Model.extend({
  url: "http://jsonplaceholder.typicode.com/users"
});

var Users = Backbone.Collection.extend({
  model: User,
  url: "http://jsonplaceholder.typicode.com/users"
})

var blog_writers = new Users();

blog_writers.fetch({
  success: function(collection) {
    console.log(collection.toJSON());
  }
})

var me = new User({
  name: "Ahmet",
  email: "ahmetfatih325@hotmail.com"
});

blog_writers.create(me,{
  success: function(model) {
    console.log(model.toJSON());
  }
})
console.log(blog_writers.length);
blog_writers.fetch({
  reset: true,
  success: function() {
    console.log(this.length);
  }
})

blog_writers.set({
  id: 1,
  name: "Ahmet",
  email: "ahmetfatih325@hotmail.com"
});

console.log(blog_writers.first().toJSON());