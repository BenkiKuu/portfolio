

window.onload = function() {
          typeWriter();
      };

      var i = 0;
      var txt = 'LEO IGANE| Software Engineer| Fullstack Developer';
      var speed = 150;

      function typeWriter() {
          if (i < txt.length) {
              document.getElementById("heading").innerHTML += txt.charAt(i);
              i++;
              setTimeout(typeWriter, speed);
          }
      }

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('transparent');
  } else {
    $('nav').removeClass('transparent');
  }
});
// $(document).ready(function() {
//    if( ! $('#myCanvas').tagcanvas({
//      textColour : '#ffffff',
//      outlineThickness : 1,
//      maxSpeed : 0.03,
//      depth : 0.75
//    })) {
//      // TagCanvas failed to load
//      $('#myCanvasContainer').hide();
//    }
//    // your other jQuery stuff here...
 // });


// $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();
// });
