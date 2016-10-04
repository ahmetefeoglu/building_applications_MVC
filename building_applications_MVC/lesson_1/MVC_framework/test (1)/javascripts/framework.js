function ModelConstructor(options) {
  var id_count = 0;

  function Model() {
    id_count++;
    this.attributes = {};
    var self = this;
    self.id = id_count;
    self.attributes.id = id_count;


  }

  Model.prototype =  {
    set: function(property,value) {
      this.attributes.property = value;
    },

    get: function(property) {
      return this.attributes.property || -1;
    }
  };

  _.extend(Model.prototype, options);

  return Model;

}