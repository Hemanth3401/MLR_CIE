/*
Title: Main Scripts
Theme Name: Ashoka
Author Name: ThemeSelection

Website: https://themeselection.com
*/
/*var mybutton = document.getElementById("myBtnu");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}*/

$(function(){
    "use strict";
    // Full screen pre loader
    $(window).load(function(){
        $("#pre-loader").delay(500).fadeOut(2000);
        $(".preload-logo").addClass('zoomOutUp');
        $(".loader").addClass('zoomOutDown');
    });   
    

    //Logo fadeIn fadeOut on 
    $(window).scroll(function(){
      if($(this).scrollTop() > $(window).height()/2.2) $('.logo-wrapper').fadeOut('slow');
      if($(this).scrollTop() < $(window).height()/2.2) $('.logo-wrapper').fadeIn('slow');
    });

    //Using the smooth scroll for smooth navigation    
    smoothScroll.init({
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
        offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
        callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
        callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
    });

    //wow animation by using with animate css
    var isiPad = (navigator.userAgent.match(/iPad/i) != null);
    if (($.browser.mobile)||(isiPad)) {
        // disable animation on mobile
        $("body").removeClass("wow");
    }
    else{
        var wow = new WOW(
          {
            boxClass:     'wow',      
            animateClass: 'animated', 
            offset:       0,          
            mobile:       true        
          }
        );
        wow.init();
    }

    // Full screen navigations
    var triggerBttn = document.getElementById( 'trigger-navbar' ),
        navbar = document.querySelector( 'section.navbar' ),
        closeBttn = navbar.querySelector( 'a.navbar-close' ),
        navClick = navbar.querySelector( 'section.navbar nav ul li a' ),
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        support = { transitions : Modernizr.csstransitions };

        function toggleOverlay() {
        if( classie.has( navbar, 'open' ) ) {
            classie.remove( navbar, 'open' );
            classie.add( navbar, 'close' );
            var onEndTransitionFn = function( ev ) {
                if( support.transitions ) {
                    if( ev.propertyName !== 'visibility' ) return;
                    this.removeEventListener( transEndEventName, onEndTransitionFn );
                }
                classie.remove( navbar, 'close' );
            };
            if( support.transitions ) {
                navbar.addEventListener( transEndEventName, onEndTransitionFn );
            }
            else {
                onEndTransitionFn();
            }
        }
        else if( !classie.has( navbar, 'close' ) ) {
            classie.add( navbar, 'open' );
        }
    }

    triggerBttn.addEventListener( 'click', toggleOverlay );
    closeBttn.addEventListener( 'click', toggleOverlay );    
    $('section.navbar nav ul li a').click(function(){
        toggleOverlay();
    });

    //prepare video
    $('.video').height($(window).height());
    $('.home-text').css('top',$(window).height()/4+'px');
    $('.home-text-2').css('top',$(window).height()/4.5+'px');

    $(window).resize(function() {
        $('.video').height($(window).height());
        $('.home-text').css('top',$(window).height()/4+'px');
        $('.home-text-2').css('top',$(window).height()/4.5+'px');
    });
    $('.video .cont').addClass('visible');
    
    setTimeout(function() {
        $('.video .sdf, .video .suys, .video .arrow').addClass('visible');
    }, 2000);

    //bg video
    $.backgroundVideo($('#bg-video'), {
        "align": "centerXY",         
        "width": 846,
        "height": 476,
        "poster": "media/business-discussion-converted.jpg", // Change display image for video from here you want to use
        "path": "media/",        
        "filename": "business-discussion-converted", // Change video from here you want to use
        "types": ["mp4", "ogg", "webm"]
    });
    
    //play video
    $('.video .play').click(function() {
        //stop the video
        if (!window.isMobile){
            $('body').addClass('noscroll').append('<div class="previewer"><div><iframe src="//player.vimeo.com/video/81676731?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><div class="close"></div></div>');
    
            //pause video
            $('body').addClass('paused');
            
            $('.previewer').click(function() {
                $('body').removeClass('noscroll');
                $(this).remove();
                
                //play video back
                $('body').removeClass('paused');
            });
            return false;
        }
    });    

    // grid gallery (Portfolio)
    new CBPGridGallery( document.getElementById( 'grid-gallery' ) );

    // Carousel
    $("#home-text-slider").owlCarousel({ 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      autoPlay : 5000,
      stopOnHover : false,
      paginationSpeed : 400,
      singleItem:true       
    });

    $("#testimonial-slider").owlCarousel({ 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      autoPlay : 5000,
      stopOnHover : false,
      paginationSpeed : 400,
      singleItem:true       
    });

    
    //Counter Up
    $('.counter').counterUp({
        delay: 5,
        time: 800
    });

    //theme style switcher
    $('#theme-customizer .cog').click(function(){
        $('#theme-options').slideToggle("slow")
    });

    // Ajax working contact form
    $("#submit").click(function() { 
        //get input field values
        var user_name       = $('input[name=name]').val(); 
        var user_email      = $('input[name=email]').val();
        var user_phone      = $('input[name=phone]').val();
        var user_message    = $('textarea[name=message]').val();
        var post_data;
        var output;
        
        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if(user_name==""){ 
            $('input[name=name]').css('border-color','red'); 
            proceed = false;
        }
        if(user_email==""){ 
            $('input[name=email]').css('border-color','red'); 
            proceed = false;
        }
        if(user_phone=="") {    
            $('input[name=phone]').css('border-color','red'); 
            proceed = false;
        }
        if(user_message=="") {  
            $('textarea[name=message]').css('border-color','red'); 
            proceed = false;
        }

        //everything looks good! letsproceed
        if(proceed) 
        {
            //data to be sent to server
            post_data = {'userName':user_name, 'userEmail':user_email, 'userPhone':user_phone, 'userMessage':user_message};
            
            //Ajax post data to server
            $.post('include/contact.php', post_data, function(response){  
                
                //load json data from server and output message     
                if(response.type == 'error')
                {
                    output = '<div class="error text-center">'+response.text+'</div>';
                }else{
                
                    output = '<div class="success text-center">'+response.text+'</div>';
                    
                    //reset values in all input fields
                    $('#contact_form input').val(''); 
                    $('#contact_form textarea').val(''); 
                }
                
                $("#form_result").hide().html(output).slideDown();
            }, 'json');
            
        }
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function() { 
        $("#contact_form input, #contact_form textarea").css('border-color',''); 
        $("#form_result").slideUp();
    });

});

$(document).ready(function(){
    // Show the Modal on load
    $("#myModal").modal("show");
      
    // Hide the Modal
    $("#myBtn").click(function(){
      $("#myModal").modal("hide");
    });
  });