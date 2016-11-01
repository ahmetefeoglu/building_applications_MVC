$(function() {
  
  $("nav").on("click","a",function(e) {
    e.preventDefault();
    var $e = $(e.target);
    var idx = $e.attr("href");
    var place_name = $e.closest("li").text();
    var current_path = window.location.pathname; 
    console.log(place_name);
    switchPage(idx);
    
    history.pushState({id: idx}, place_name, current_path + idx);
  })

  

  window.addEventListener("popstate", function(e) {
    console.log("yeahhh");
        var state = e.state;
    switchPage(state === null ? "#page_1" : state.id);
    

  })
  
  if (location.hash) {
    switchPage(location.hash);
  }
  

  function switchPage(id) {
    $("a.chosen").removeClass("chosen");
    $("nav a[href= '" + id + "']").addClass("chosen");
    $("article").hide().filter(id).show();
  } 
})