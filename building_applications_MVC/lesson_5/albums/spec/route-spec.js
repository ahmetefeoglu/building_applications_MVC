

var request = require('request');
var root = "http://localhost:3000/";
var albums;

jasmine.getEnv().defaultTimeoutInterval = 500;
describe("JSON ROUTE TEST", function() {
  describe("/albums.json",function() {
    it("should respond with hello world", function(done) {
      request(root + "/albums.json", function(error, response, body){
        albums = JSON.parse(body);
        expect(albums[0].artist).toBeDefined();
        
        done();
      });
    });
  })

  describe("/albums/<album>.json", function() {
    it("returns an array of tracks",function(done) {
      request(root + "albums/" + albums[0].title + ".json", function(e,res,body) {
        expect(JSON.parse(body)[0].title).toBeDefined();
        done();
      })

    })
  }) 
});


