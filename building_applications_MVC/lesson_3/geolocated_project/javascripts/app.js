//
var map = {
  width: 600,
  height:420,
  buildURL: function() {
    var base = "https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=";
    var coords = + this.position.coords.latitude + "," + this.position.coords.longitude;
    base += this.width + "x" + this.height +  "&center="  + coords;
    return base + "&markers=" + coords;
    

  },

  error: function(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  },
  buildMap: function() {
    var $img = $("<img />", {
      width: this.width,
      height: this.height,
      src: this.buildURL()
    });
    $("#map").html($img);
    
  },

  buildWeatherURL: function() {
    var base = "http://api.openweathermap.org/data/2.5/weather?";
    var keycode = "&APPID=" + "4fb289735e02c086b182a1f0b0978b54";   
    base += "lat=" + this.position.coords.latitude + "&lon=" + this.position.coords.longitude;
    base += keycode;
    return base;
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?",
      success: function(json_obj) {
        console.log(json_obj);
      }
    })
  },

  getWeatherIcon: function(description) {
    var weather_icon = $("<img />", {
      width:100,
      height:100,
      src: "http://openweathermap.org/img/w/" + description + ".png"
    })
    return weather_icon;
  },

  buildWeather: function() {
    var self = this;
    $.ajax({
      url: this.buildWeatherURL(),
      success: function(json_obj) {
        var $name = $("<a />").text(json_obj.name);
        var temp = json_obj.main.temp - 460;
        var $temp = $("<a />").text(temp);
        var description = json_obj.weather[0].icon;
        var $icon = self.getWeatherIcon(description);
        self.showWeather($icon,$name, $temp);
      } 
    });

    

  },

  

  showWeather: function(icon,name,temp) {
    $("#weather").append(icon);
    $("#weather").append(name);
    $("#weather").append(temp);

  },
  build: function(position) {
    this.position = position;
    this.buildMap();
    this.buildWeather();
    

  }
};

navigator.geolocation.getCurrentPosition(map.build.bind(map), map.error.bind(map));




  







  

  
  

