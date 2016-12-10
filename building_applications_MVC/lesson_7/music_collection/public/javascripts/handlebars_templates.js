this["JST"] = this["JST"] || {};

this["JST"]["album"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<img(src=\""
    + alias4(((helper = (helper = helpers.cover || (depth0 != null ? depth0.cover : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover","hash":{},"data":data}) : helper)))
    + "\" /><h2> "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2><h3>"
    + alias4(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist","hash":{},"data":data}) : helper)))
    + "</h3><p>"
    + alias4(((helper = (helper = helpers.data || (depth0 != null ? depth0.data : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data","hash":{},"data":data}) : helper)))
    + "</p> <p>$"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</p><a class = \"button\" href = \"#\">Add to Cart</a>";
},"useData":true});

this["JST"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1> Music Store</h1><ul></ul><footer><a class = \"button\" href = \"#\"> Add album</a></footer>";
},"useData":true});

this["JST"]["new_album"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id =\"new_album\"><form action=\"/albums\" method=\"post\"><fieldset><dl><dt><label for = \"artist_name\">Artist Name:</label></dt><dd><input type=\"text\" name=\"artist_name\" /></dd><dt><label for =\"album_name\">Album Name:</label></dt><dd><input type=\"text\" name=\"album_name\" /></dd><dt><label for = \"date\">Release Date:</label></dt><dd><input type=\"date\" name=\"date\" /></dd><dt><label for =\"cover\">Cover:</label><dd><input type=\"url\" name=\"cover\" /></dd><dt><label for = \"price\">Price:</label></dt><dd><input type=\"text\" name=\"price\" /></dd></dl></fieldset><fieldset class = \"actions\"><input type=\"submit\" value=\"Create\" /></fieldset></form></div>";
},"useData":true});