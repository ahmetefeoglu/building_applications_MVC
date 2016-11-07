describe("Checks if honda objects and it's properties are created correctly", function() {
  beforeEach(function() {
    this.honda = new Honda("Civic");
  });

  it("inherits the Vehicle prototype", function() {
    
    expect(this.honda.toString()).toBeDefined();
  });

  it("sets the model property when a valid model is passed in", function() {
    expect(this.honda.make).toBe("Honda");
    expect(this.honda.model).toBe("Civic");
  })

  it("throws an error if an invalid model is passed in", function() {
     function invalidHonda() {
      return new Honda("Civcccccc");
     }

     expect(invalidHonda).toThrowError(/does not exist/);
  });

  it("returns a list of valid methods", function() {
     expect(Honda.getModels().length).toBeDefined();
     expect(Honda.getModels()).toContain("Civic");
  });

  it("calls getPrice when a new car is created", function() {
    spyOn(Honda, "getPrice");

    var car = new Honda("Civic");
    expect(Honda.getPrice).toHaveBeenCalled();
    expect(Honda.getPrice).toHaveBeenCalledWith("Civic");

  })

  it("returns a price for the passed in model", function() {
    expect(Honda.getPrice("Civic")).toBe(14500);
  });
})