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