$(function() {
  var workers = {
    brightness: new Worker("/javascripts/brightness.js"),
    saturation: new Worker("/javascripts/saturation.js"),
    invert:  new Worker("/javascripts/invert.js"),
    flip_vertical: new Worker("/javascripts/flip_vertical.js"),
    flip_horizontal: new Worker("/javascripts/flip_horizontal.js"),
  };

  // Drawing the image to canvas
  var canvas = document.getElementById("viewCanvas");
  var context = canvas.getContext("2d");
  var imageObj = new Image();
  imageObj.src = "paysage.jpg";
  imageObj.onload = function() {
    context.drawImage(imageObj,10,10);
  }
  // adding event listeners for  all workerss
  for (var prop in workers) {
    workers[prop].addEventListener("message",function(message) {
      putData(context, message.data.image_data);
    })
  }

  $("ul").on("click","a", function(e) {
     e.preventDefault();
     console.log($(e.target));
     var data = $(e.target).attr("data-method")
     var worker = workers[data];
     worker.postMessage({image_data: getData(ctx)});
    
    
  })
})

function putData(context,image_data) {

}

function getData(ctx) {
  return ctx.getImageData(0,0, ctx.canvas.width, ctx.canvas.height);
}


