var Post = Backbone.Model.extend({
  urlRoot: "http://",
  initialize: function() {

  }
});

var Posts = Backbone.Collection.extend({
  comparator: "title",
  model: Posts,
  url: "http://jsonplaceholder.typicode.com/posts"
});

var blog_posts = new Posts();

blog_posts.on("sync",function() {
  console.log(blog_posts.toJSON());
})

blog_posts.fetch();




  







  

  
  

