$(function () {
"use strict";
   AOS.init();
});


$(function () {
    
      "use strict";
    
        $('html').niceScroll({
            cursorcolor:"#18d26e",
            cursorborder:"1px solid black"
            
        });
});
$(function () {
    

});  


$(function () {
    
      "use strict";
    
  var containerEl = document.querySelector('#containermix');
  var mixer = mixitup(containerEl);
  
});
  


$(function () {
      
  wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };
  
});

$(function () {
  jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            time:1000,
            loop:false
        });
    });
});
 $(function () {
    
    var typed = new Typed(".type", {
   strings: ["Welcome to Flexor" ],
   backSpeed:50,
   typeSpeed:50,
   loop:false,
   backDelay:3000,
       showCursor:false

   }); 
    var typed = new Typed(".type-me", {
   strings: ["We are team of talanted designers making websites with Bootstrap" ],
   backSpeed:50,
   typeSpeed:20,
   loop:false,
   startDelay:1600,
   showCursor:false
   });

  
}); 

$(function () {
   $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:20,
    nav:false,
    mouseDrag:true,

    responsive:{
        768:{
            items:1
        },
        1000:{
            items:2
        },
        1200:{
            items:3
        }
    }
})


});