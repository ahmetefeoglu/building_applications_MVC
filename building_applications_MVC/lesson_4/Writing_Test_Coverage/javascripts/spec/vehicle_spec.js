describe("Vehicle constructor", function() {

  beforeEach(function() {
    this.car = new Vehicle({
      make: "Honda",
      model: "Accord"
    })
  });

  it("sets the make and model properties when an object is passed in",function() {
    expect(this.car.make).toEqual("Honda");
    expect(this.car.model).toEqual("Accord");
  });

  xit("returns a concatenated string with make and model",function() {
    expect(this.car.toString()).toEqual("Honda Accord");
    this.car.make = "Toyota";
    expect(this.car.toString()).toEqual("Toyota Accord");

  });

  it("returns a message when the horn is honked",function() {
    expect(this.car.honkHorn()).toMatch(/beep/i);
  })
})
