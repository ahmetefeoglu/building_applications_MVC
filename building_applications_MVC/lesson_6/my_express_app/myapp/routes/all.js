var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports = function(app) {

  function setActiveNavTo(title) {
    // Find the current active title
    var active_title = _(app.locals.links).findWhere({active: true});
    //İf there is  a current active title remove active class from it
    if (active_title) { active_title.active = false};

    //Add active to the given title
    _(app.locals.links).findWhere({title:title}).active = true;


  }
  router.get('/', function(req, res, next) {
    var title = "Home";
    setActiveNavTo(title);
    res.render('index', { title: title });
  });

  router.get("/about", function(req,res,next) {
    res.render("about", {title: title});
  })

}


module.exports = router;
