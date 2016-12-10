var express = require('express');
var router = express.Router();

var fs = require("fs");
var path = require("path");
/* GET home page. */



 

/* ROUTESSS */
router.get('/', function(req, res, next) {
  //res.sendFile(__dirname.replace(/routes/, "views") + "/index.html");

  var products = fs.readFileSync(path.resolve(path.dirname(__dirname), "public/products.json"), "utf8");
  res.render('index', {
    products: JSON.parse(products),
    title: "Web Store"
  });
});


module.exports = router;
