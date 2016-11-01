 console.log("Awesome");
 //var largestProduct = new Worker("/Users/ahmetefeoglu/Desktop/launchschool/building_applications_MVC/lesson_3/web_worker/javascripts/worker.js");
 var largestProduct = new Worker("/javascripts/worker.js");
 $(function() {
  var $form = $("form");
  var $answer = $("strong");

  $form.on("submit", function(e) {
    e.preventDefault();
    var numeric_string = $form.find("#text").val();
    var digit_length =  +$form.find("numLength").val();
    largestProduct.postMessage([numeric_string, digit_length]);
  })

  largestProduct.addEventListener("message", function(message) {
    $answer.text(message.data);
  })
 })
 