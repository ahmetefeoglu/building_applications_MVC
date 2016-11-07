var available_models = ["Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"];
var prices = [16500,    14500,   21000,       15800,  12000,  13100, 16000,  18100,     22500,     19300];
function Honda(model) {
  var current_model = model;

  if (!this.verify(current_model)) {
    throw new Error("Model" + current_model + " does not exist.");
    return undefined;
  }

  this.make = "Honda";
  this.model = current_model;
  this.price = Honda.getPrice(this.model);
}

(function() {
  Honda.prototype = Object.create(Vehicle.prototype);

  Honda.prototype.verify = function(model) {
    return available_models.includes(model);
  }

  Honda.getPrice = function(curr_model) {
    var index = available_models.indexOf(curr_model);

    return prices[index];
  };

  Honda.getModels = function() {
    return available_models.slice();
  };

  Honda.constructor = Honda;

})();
// On line 8 we make Vehicle object the prototype object our Honda object
Honda.prototype = Object.create(Vehicle.prototype);

Honda.prototype.verify = function(model) {
  return available_models.includes(model);
}

Honda.getPrice = function(curr_model) {
  var index = available_models.indexOf(curr_model);

  return prices[index];
};

Honda.getModels = function() {
  return available_models.slice();
};

Honda.constructor = Honda;



