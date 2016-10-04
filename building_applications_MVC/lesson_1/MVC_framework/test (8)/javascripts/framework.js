function ModelConstructor(options) {
  var id_count = 0;

  function Model(attributes) {
    id_count++;
    
    this.attributes =  attributes || {};
    var self = this;
    self.id = id_count;
    self.attributes.id = id_count;

    if (options && options.change && _.isFunction(options.change)) {
      this.__events.push(options.change);
    }


  }

  Model.prototype =  {

    __events: [],
    set: function(key,value) {
      this.attributes[key] = value;
      console.log(this.attributes);
      this.triggerChange();
    },

    get: function(key) {
      return this.attributes[key];
    },

    triggerChange: function() {
      this.__events.forEach(function(func) {
        func();
      })
    },

    addCallback: function(cb) {
      this.__events.push(cb);
    },

    remove: function(key) {
      delete this.attributes[key];
      triggerChange();
    }
  };

  _.extend(Model.prototype, options);

  return Model;

}


function CollectionConstructor(options) {
  function Collection(model_constr) {
    this.model = model_constr;
    this.models = [];


  }

  Collection.prototype = {
    reset: function() {
      this.models = [];
    },

    add: function(model) {
      var old_m = _(this.models).findWhere({ id: model.id });
      var new_m;

      if (old_m) { return old_m;}

      new_m = new this.model(model);
      this.models.push(new_m);
      return new_m;
      
    },

    remove: function(model) {
      model = _.isNumber(model) ? { id: model} : model;
      var m = _(this.models).findWhere(model);

      if (!m) { return; }

      this.models.filter(function(existing_m) {
        return existing_m.attributes.id !== m.id;
      })

    },

    set: function(models) {
      this.reset();
      models.forEach(this.add.bind(this));
      
    },

    get: function(idx) {
      return _(this.models).findWhere({ id: idx});
    }
  }

  _.extend(Collection.prototype, options);
  return Collection;
}


function ViewConstructor(options) {
  function View(model) {
    this.model = model;
    this.model.view = this;
    this.$el = $("<" + this.tag_name + " />", this.attributes);

  }

  View.prototype = {
    tag_name: "div",
    template: function() {

    },
    attributes: {},
    render: function() {
      this.$el.html(this.template(this.model.attributes));
    }

  };

  _.extend(View.prototype, options);

  return View;

}