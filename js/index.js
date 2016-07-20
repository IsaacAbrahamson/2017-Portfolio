$(document).ready(function () {
  drawLines();
  window.onresize = function (event) {
    drawLines();
  };

  //play background video for android devices
  var video = document.getElementById('video');
  video.play();

  //stop float from being pushed down
  var leftHeight = $('.content-left').height() * -1;
  $('.content-right').css('margin-top', leftHeight);

  $(document).scroll(function () {
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
  $('#nav .icon').click(function () {
    $('#mobile-dropdown').fadeToggle('fast');
  });

  //Animate Portfolio Captions
  $('.boxgrid.captionfull').hover(function () {
    $(".cover", this).stop().animate({ top: '0px' }, { queue: false, duration: 160 });
  }, function () {
    var tileHeight = $(this).height();
    $(".cover", this).stop().animate({ top: tileHeight }, { queue: false, duration: 160 });
  });

  //smooth scrolling anchor tags - https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
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

  function drawLines() {
    var servicesBackground = document.getElementById("servicesBackground");
    var ctx = servicesBackground.getContext("2d");
    var parentWidth = $('#services').width();
    var parentHeight = $('#services').height();
    ctx.canvas.height = parentHeight;
    ctx.canvas.width = parentWidth;
    ctx.clearRect(0, 0, parentWidth, parentHeight);
    ctx.setLineDash([15, 5]);
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#A1CFE6';
    ctx.beginPath();

    var businessPointX = $('#businessService').position().left + ($("#businessService").outerWidth() / 2);
    var businessPointY = ($("#businessService").offset().top - $("#services").offset().top) + ($("#businessService").outerHeight() / 2);
    var devPointX = $('#devService').position().left + ($("#devService").outerWidth(true) / 2);
    var devPointY = ($("#devService").offset().top - $("#services").offset().top) + ($("#devService").outerHeight() / 2);
    var netPointX = $('#netService').position().left + ($("#netService").outerWidth() / 2);
    var netPointY = ($("#netService").offset().top - $("#services").offset().top) + ($("#netService").outerHeight() / 2);
    var servicePointX = $('#serviceService').position().left + ($("#serviceService").outerWidth() / 2);
    var servicePointY = ($("#serviceService").offset().top - $("#services").offset().top) + ($("#serviceService").outerHeight() / 2);

    if ($(window).width() <= 1250) {
      ctx.moveTo(businessPointX, businessPointY);
      ctx.lineTo(servicePointX, servicePointY);
      ctx.stroke();
    } else {
      ctx.moveTo(businessPointX, businessPointY);
      ctx.lineTo(businessPointX, servicePointY);
      ctx.stroke();
      ctx.moveTo(businessPointX, servicePointY);
      ctx.lineTo(servicePointX, servicePointY);
      ctx.stroke();

      ctx.moveTo(netPointX, netPointY);
      ctx.lineTo(netPointX, servicePointY);
      ctx.stroke();
      ctx.moveTo(netPointX, servicePointY);
      ctx.lineTo(servicePointX, servicePointY);
      ctx.stroke();

      ctx.moveTo(devPointX, devPointY);
      ctx.lineTo(servicePointX, servicePointY);
      ctx.stroke();
    }
  }
});