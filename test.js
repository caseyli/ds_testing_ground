$(function(){
  console.log("JQuery's working.");
  
  $(window).scroll(windowScroll);
  
});


function windowScroll() {
  var pixelsDown = $(window).scrollTop();
  console.log("How many pixels are beyond the top of the window: " + pixelsDown);
}