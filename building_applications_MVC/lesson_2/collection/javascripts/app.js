var PostModel = Backbone.Model.extend({});

var Posts = Backbone.Collection.extend({
  model: PostModel,
  url: "http://jsonplaceholder.typicode.com/posts"
});

var blog_roll = new Posts();

blog_roll.fetch({
  reset: true,
  success: function(collection) {
    console.log(collection.toJSON());
  }
})

console.log(blog_roll);
var first_post = blog_roll.get(1);
console.log(first_post);


