{/* <a href="#" class="slide" data-slide="1">1</a>
<a href="#" class="slide" data-slide="2">2</a>
<a href="#" class="slide" data-slide="3">3</a>
<a href="#" class="slide" data-slide="3">4</a> */}

// NEXT AND PREVIOUS CONTROL
function curSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    curSlides(slideIndex -= 1);
  } else {
   curSlides(slideIndex += 1); 

$(function(){

  $('.slide').on('click',function(){

    let curSlide = $(this).attr('data-slide');

    switch(curSlide){
      case '1':
       $('.slide-container').css({
       transition: 'transform 0.5s',
       transform: 'translateX(0)'
       });
      break;

      case '2':
       $('.slide-container').css({
       transition: 'transform 0.5s',
       transform: 'translateX( calc(-100% - 100px))'
       });
      break;

      case '3':
       $('.slide-container').css({
       transition: 'transform 0.5s',
       transform: 'translateX( calc(-200% - 200px))'
       });
      break;

      default:
       $('.slide-container').css({
       transition: 'transform 0.5s',
       transform: 'translateX(0)'
       });
    };

  });
});
