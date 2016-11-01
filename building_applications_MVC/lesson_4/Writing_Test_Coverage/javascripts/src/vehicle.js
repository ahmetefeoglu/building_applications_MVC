function Vehicle(obj) {
  this.make = obj.make;
  this.model = obj.model;
  this.toString = function() {
    return this.make + " " + this.model;
  };

  this.honkHorn = function() {
    return "Beep beep!";
  };

  
  



}