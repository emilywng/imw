// number of times window is resized - category: events
var x = 0;
$(document).ready(function () {
    $(window).resize(function () {
        $("span").text(x += 1);
    })
})

// window size - category: manipulation
var WindowsSize=function(){
var h=$(window).height(),
w=$(window).width();
$("#winSize").html("<p>Width: "+w+" px<br>Height: "+h+" px</p>");
};
$(document).ready(WindowsSize); 
$(window).resize(WindowsSize); 

// fade in/fade out - category: effects
$(document).ready(function(){
    $(".btn1").click(function(){
      $("img").fadeOut();
    });
    $(".btn2").click(function(){
      $("img").fadeIn();
    });
  });