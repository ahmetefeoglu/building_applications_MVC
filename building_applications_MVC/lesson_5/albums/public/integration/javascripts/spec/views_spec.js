


describe("Albums view", function() {
  beforeEach(function() {
    this.view = new AlbumsView({collection: albums_scaffold });
  })

  it("checks that views collection is defined and it's length is 3", function() {
    expect(this.view.collection).toBeDefined();
    expect(this.view.collection.length).toBe(albums_scaffold.length);
  });

  it("should have a  handlebars template in it's property", function() {
    expect(this.view.template).toBeDefined();
  });

  it("should render to an #albums container when render called", function() {
    this.view.render();
    expect($("#albums li").length).toBe(albums_scaffold.length);
  });

  it("should render the view when collection cahnges", function() {
    var model = albums_scaffold.findWhere({ artist: "Tori Kelly" }),
        original_html, new_html;

    this.view.render();
    original_html = $("#albums").html();
    model.set("title", "ahmet efe");
    new_html = $("#albums").html();

    expect(original_html).not.toEqual(new_html);

  })
})
 

