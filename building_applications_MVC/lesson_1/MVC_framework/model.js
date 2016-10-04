<!doctype html>
<html lang = "en-Us">
  <head>
    <title></title>
    <meta charset="UTF-8" /> 
    <link rel="stylesheet" type="text/css" href="splash.css">  
  </head>
  <body>
    <script>
    /*
      var Car = new ModelConstructor({
        change: function() {
          console.log("I'm a car!");
        }
      });

      var Truck = new ModelConstructor({
        change: function() {
          console.log("I'm a truck!");
        }
      });


      function ModelConstructor(obj) {

      }

      var sedan = new Car({ doors: 4 });
      sedan.set("engine", "3.0l V6"); // Logs "I'm a car!"

      var coupe = new Car({ doors: 2 });
      coupe.set("engine", "1.4l I4"); // Logs "I'm a car!"

      var pickup = new Truck({ capacity: "3/4 ton" });
      pickup.set("engine", sedan.get("engine"));

      */

      function Model() {

      }

      console.log(Model.prototype);


      var Car = ModelConstructor(),
      bmw = new Car();
      bmw.set("make", "BMW");
      bmw.set("model", "328i");
      $("#make").text(bmw.get("make"));
      $("#model").text(bmw.get("model"));

    </script>
  </body>
</html>