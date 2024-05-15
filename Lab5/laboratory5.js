$(document).ready(function() {
    var sliderInterval;
  
    function startSlider() {
      sliderInterval = setInterval(function() {
        $('#slider-container').animate({marginLeft: '-=220px'}, 500, 'linear', function() {
          $(this).css({marginLeft: 0}).find('img:first').appendTo(this);
        });
      }, 1000);
    }
  
    startSlider();
  
    $('.slider-image').click(function() {
      clearInterval(sliderInterval);
      var imageUrl = $(this).attr('src');
      $('#lightbox').html('<img src="' + imageUrl + '">').fadeIn();
    });
  
    $('#lightbox').click(function() {
      $(this).fadeOut();
      startSlider();
    });
  });