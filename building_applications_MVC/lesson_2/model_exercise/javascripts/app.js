var PostModel = Backbone.Model.extend({
  urlRoot: "http://jsonplaceholder.typicode.com/posts"
});

var UserModel = Backbone.Model.extend({
  urlRoot: "http://jsonplaceholder.typicode.com/users"
});

var post_1 = new PostModel({
  id: 1
})

post_1.fetch({
  success: function(model) {
    console.log(model.toJSON());
  }
})




var UserModel = Backbone.Model.extend({
  urlRoot: "http://jsonplaceholder.typicode.com/users"
});

var user = new UserModel({ id: post_1.get("userId") });
console.log(post_1.toJSON());
console.log(user.toJSON());
console.log(post_1.get("userId"));


post_1.fetch({
  success: function(model) {
    console.log(model.toJSON());
  }
})

