
/* Background Images
-------------------------------------------------------------------*/
var  pageTopImage = jQuery('#page-top').data('background-image');
var  meetImage = jQuery('#meet').data('background-image');
var  accommodationImage = jQuery('#accommodation').data('background-image');
var  contactImage = jQuery('#contact').data('background-image');
var  informationImage = jQuery('#information').data('background-image');
var  rsvpImage = jQuery('#rsvp').data('background-image');

if (pageTopImage) {  jQuery('#page-top').css({ 'background-image':'url(' + pageTopImage + ')' }); };
if (meetImage) {  jQuery('#meet').css({ 'background-image':'url(' + aboutImage + ')' }); };
if (accommodationImage) {  jQuery('#accommodation').css({ 'background-image':'url(' + accommodationImage + ')' }); };
if (contactImage) {  jQuery('#contact').css({ 'background-image':'url(' + contactImage + ')' }); };
if (informationImage) {  jQuery('#information').css({ 'background-image':'url(' + pageTopImage + ')' }); };
if (rsvpImage) {  jQuery('#rsvp').css({ 'background-image':'url(' + pageTopImage + ')' }); };

/* Background Images End
-------------------------------------------------------------------*/



/* Document Ready function
-------------------------------------------------------------------*/
jQuery(document).ready(function($) {
  "use strict";


    /* Window Height Resize
    -------------------------------------------------------------------*/
    var windowheight = jQuery(window).height();
    if(windowheight > 650)
    {
         $('.pattern').removeClass('height-resize');
    }
    /* Window Height Resize End
    -------------------------------------------------------------------*/


    
  /* Main Menu   
  -------------------------------------------------------------------*/
  $('#main-menu #headernavigation').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    scrollOffset: 0,
    filter: '',
    easing: 'swing'
  });  

  /* Main Menu End  
  -------------------------------------------------------------------*/




  /* Time Countdown 
  -------------------------------------------------------------------*/
  $('#time_countdown').countDown({
        
        targetDate: {
            'day': 15,
            'month': 7,
            'year': 2017,
            'hour': 14,
            'min': 30,
            'sec': 0
        },
        omitWeeks: true

  //        targetOffset: {
  //           'day':      0,
  //           'month':    0,
  //           'year':     1,
  //           'hour':     0,
  //           'min':      0,
  //           'sec':      3
    // },
    // omitWeeks: true

      });



  /* Next Section   
  -------------------------------------------------------------------*/
  $('.next-section .go-to-meet').click(function() {
      $('html,body').animate({scrollTop:$('#meet').offset().top}, 1000);
    });
  $('.next-section .go-to-accommodation').click(function() {
      $('html,body').animate({scrollTop:$('#accommodation').offset().top}, 1000);
    });
    $('.next-section .go-to-information').click(function() {
      $('html,body').animate({scrollTop:$('#information').offset().top}, 1000);
    });
    $('.next-section .go-to-directions').click(function() {
      $('html,body').animate({scrollTop:$('#directions').offset().top}, 1000);
    });
    $('.next-section .go-to-gifts').click(function() {
      $('html,body').animate({scrollTop:$('#gifts').offset().top}, 1000);
    }); 
    $('.next-section .go-to-rsvp').click(function() {
      $('html,body').animate({scrollTop:$('#rsvp').offset().top}, 1000);
    }); 
    $('.next-section .go-to-page-top').click(function() {
      $('html,body').animate({scrollTop:$('#page-top').offset().top}, 1000);
    });
    $('.go-to-directions-second').click(function() {
      $('html,body').animate({scrollTop:$('#directions').offset().top}, 1000);
    });

    /* Next Section End
  -------------------------------------------------------------------*/



  /* Contact
  -------------------------------------------------------------------*/
$("#contact-form").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});



function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var rsvp = $(".rsvp:checked").val();
    var dietaryRequirements = $("#dietaryRequirements").val();

    $.ajax({
        type: "POST",
        url: "php/contact.php",
        data: "name=" + name + "&email=" + email + "&rsvp=" + rsvp + "&dietaryRequirements=" + dietaryRequirements,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contact-form")[0].reset();
    submitMSG(true, "Thank you, your RSVP has been sent")
}

function formError(){
    $("#contact-form").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
  /* Contact End
  -------------------------------------------------------------------*/

    


});

/* Document Ready function End
-------------------------------------------------------------------*/


/* Preloder 
-------------------------------------------------------------------*/
$(window).load(function () {    
    "use strict";
    $("#loader").fadeOut();
    $("#preloader").delay(1).fadeOut("slow");
});
 /* Preloder End
-------------------------------------------------------------------*/
   
