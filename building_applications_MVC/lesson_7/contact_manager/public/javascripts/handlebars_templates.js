this["JST"] = this["JST"] || {};

this["JST"]["contact"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h2> "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2><dl><dt>Phone Number:</dt><dd>"
    + alias4(((helper = (helper = helpers.telephone || (depth0 != null ? depth0.telephone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"telephone","hash":{},"data":data}) : helper)))
    + "</dd><dt> Email:</dt><dd>"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</dd></dl><a href = \"#\" id = \"edit\">Edit</a><a href = \"#\" id = \"delete\">Delete</a>";
},"useData":true});

this["JST"]["home"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav><div class = \"add_contact\"><a href = \"/contacts/new\" class = \"add\"> Add Contact</a></div><div class = \"search\"><input type = \"text\" placeholder = \"Search\" /></div><div class= \"no_contact\"><p> There are no contacts</p><a href = \"\">Add Contact</a></div><div class = \"contacts\"><h2> Your Contact List</h2><ul></ul></div>";
},"useData":true});

this["JST"]["new_contact"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2> Create Contact</h2><form action=\"/contacts\" method = \"post\"><div class = \"blocks\"><label for = \"name\">Full name:</label><div><input type = \"text\" name = \"name\" /></div></div><div class = \"blocks\"><label for = \"email\">Email Adress:</label><div><input type = \"email\" name = \"name\" /></div></div><div class = \"blocks\"><label for = \"telephone\">Full name:</label><div><input type = \"tel\" name = \"telephone\" /></div></div><div class = \"submission\"><input type = \"submit\" value = \"Submit\" /><a href = \"#\"> Cancel</a></diV></form>";
},"useData":true});