describe("Tracks view", function() {
  var album = albums_scaffold.findWhere({title: "Unbreakable Smile (Bonus Track Version)" });
  beforeEach(function() {
   
    
    this.tracks_view = new TracksView({collection: tracks_scaffold, album: album});
  })

  afterEach(function() {
    this.tracks_view.remove();
  })

  it("has a collection property assigned", function() {
    expect(this.tracks_view.collection).toBeDefined();
    expect(this.tracks_view.collection.length).toBe(tracks_scaffold.length);

  })

  it("has a handlebars template compiled", function() {
    expect(this.tracks_view.template).toBeDefined();
  })

  it("renders the modal to the body when render is called", function() {
    this.tracks_view.render();
    expect($("#tracks_modal ol li").length).toBe(tracks_scaffold.length);
  })

  it("removes the view when fadeOut called", function() {
    this.tracks_view.fadeOut();
    expect($("#tracks_modal").length).toBe(0);
  })
})