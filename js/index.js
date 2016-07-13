$(document).ready(function() {
  //stop float from being pushed down
  var leftHeight = $('.content-left').height() * -1;
  $('.content-right').css('margin-top', leftHeight);

  $(document).scroll(function() {
    //remove transparent class from header
    if ($(document).scrollTop() > 5) {
      if (!$('#nav-container').hasClass('nav-body')) {
        $('#nav-container').addClass('nav-body');
      }
    }
    
    //add transparent class to header
    if ($(document).scrollTop() < 5) {
      if ($('#nav-container').hasClass('nav-body')) {
        $('#nav-container').removeClass('nav-body');
      }
    }
  });

  //show mobile dropdown menu
  $('#nav .icon').click(function() {
    $('#mobile-dropdown').fadeToggle('fast');
  });
  
  //Animate Portfolio Captions
	$('.boxgrid.captionfull').hover(function(){
	  $(".cover", this).stop().animate({top:'0px'},{queue:false,duration:160});
	}, function() {
    var tileHeight = $(this).height();
	  $(".cover", this).stop().animate({top:tileHeight},{queue:false,duration:160});
	});

  //smooth scrolling anchor tags - https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
});