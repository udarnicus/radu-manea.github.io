$(document).ready(function(){
    var $window = $(window),
        $html = $('html');
    
    
    
    

  /*$("#homesection a").click(function(){
      $(".btn").animate({left:80, opacity:"show"}, 1500); 
   
      
      
  });*/
    


    /*Function delays the loading screen by 3 sec*/
     setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222'); 
    }, 3000);
    
    /*Removes the scrolling blocked class*/
     
     setTimeout(function(){
      $("body").removeClass("stop-scrolling"); 
    }, 3000);
    
    
    /*Function delays the Fade from bottom animation by 3 sec so it's sychronized to the loading screen*/
     setTimeout(function(){
         $(".Fadeonpageload").addClass("animated fadeInDown");
     },3000);
    /*Function removes the animation classes for the loading page fade from bottom so the general fade effect can change the opacity- if not the opacity would have been 1 from the "fadeInDown function"*/
    setTimeout(function(){
         $(".Fadeonpageload").removeClass("animated fadeInDown");
         
     },4500);
    


      /*calls the fade in funvtion(see js/jquery.fadethis)*/   
     $(window).fadeThis();
    
    
    /*calls the resize function(removes the blue bar effect from the toggled navbar)*/
     resize();
    
    
    
    /*Smooth scrolling when clicking the nav buttons effect*/
   
    $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
 
    
    

    
   /*removes the blue bar effect from the toggled navbar*/ 
    
    function resize() {
        if ($window.width() < 768) {
            return $(".navbuttons").removeClass("hvr-overline-from-center");
        }

        $(".navbuttons").addClass("hvr-overline-from-center");
    }
    
    
/*Calls the resize function when windows is being resized */
    $window
        .resize(resize)
        .trigger('resize');
    
    
        
});




