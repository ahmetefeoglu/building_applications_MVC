

var request = require('request');
jasmine.getEnv().defaultTimeoutInterval = 500;
describe("JSON ROUTE TEST", function() {
  it("should respond with hello world", function(done) {
      request("http://localhost:3000/albums.json", function(error, response, body){
        var albums = JSON.parse(body);
        expect(albums[0].artist).toBeDefined();
        done();
      });
  });
});


/*
describe("MY TEST",function() {
  it("test succeds",function() {
    expect(true).toBe(false);
    expect(true).toBe(true);
  })
})

*/