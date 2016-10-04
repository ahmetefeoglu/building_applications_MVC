Handlebars.registerPartial("post",$("#post").html());
var Post = Backbone.Model.extend({
  urlRoot: "http://jsonplaceholder.typicode.com/posts",
  initialize: function() {

  }
});

var Posts = Backbone.Collection.extend({
  comparator: "title",
  model: Post,
  url: "http://jsonplaceholder.typicode.com/posts"
});

var PostsView = Backbone.View.extend({
  el: $("main").get(0),
  template: Handlebars.compile($("#posts_template").html()),

  render: function() {
    this.$el.html(this.template({posts: this.collection.toJSON() }));
  },

  initialize: function() {
    this.listenToOnce(this.collection, "sync", this.render);
  }

  
});

var PostView = Backbone.View.extend({
  tagName: "article",
  template: Handlebars.compile($("#post").html()),
  events: {
    "click h1": "logMe"
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    $("main").prepend(this.$el);
  },

  logMe: function() {
    console.log(this);
  },

  initialize: function() {
    // We passed in the model  not the collectio, because it is the one we want  to render.
    this.listenTo(this.model, "sync", this.render);
  }
})

var blog_posts = new Posts();
var posts_page = new PostsView({ collection: blog_posts });

blog_posts.fetch();

$("form").on("submit", function(e) {
  e.preventDefault();
  var data = $(this).serializeArray();
  var post_view = new PostView();
  var obj = {};
  data.forEach(function(attr) {
    obj[attr.name] = attr.value;
  })

  var model = blog_posts.create(obj);
  post_view = new PostView({model: model});

})





