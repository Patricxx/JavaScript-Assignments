// let slidePosition = 1;
// SlideShow(slidePosition);

// // forward/Back controls
// function plusSlides(n) {
//   SlideShow(slidePosition += n);
// }

// //  images controls
// function currentSlide(n) {
//   SlideShow(slidePosition = n);
// }

// function SlideShow(n) {
//   let i;
//   let slides = document.getElementsByClassName("Containers");
//   if (n > slides.length) {slidePosition = 1}
//   if (n < 1) {slidePosition = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   slidePosition++;
//   if (slidePosition > slides.length) {slidePosition = 1}
//   slides[slidePosition-1].style.display = "block";
//   setTimeout(SlideShow, 4000); // Change image every 3 seconds
// } 


// Automatisch

// let slidePosition = 0;
// SlideShow();

// function SlideShow() {
//   let i;
//   let slides = document.getElementsByClassName("Containers");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slidePosition++;
//   if (slidePosition > slides.length) {slidePosition = 1}
//   slides[slidePosition-1].style.display = "block";
//   setTimeout(SlideShow, 3000); // Change image every 3 seconds
// }

//-------------------------------

// let slideIndex = 1;
// let timer;

// showSlides(slideIndex);

// function plusSlides(n) {
//   slideIndex = slideIndex + n;
//   clearTimeout(t);
//   showSlides(slideIndex);
//   console.log(slideIndex);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("Containers");
//   if (n == undefined) { n = ++slideIndex;}
//   if (n > slides.length) { slideIndex = 1}
//   if (n < 1) { slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) { 
// 	  slides[i].style.display = "none";}


//   slides[slideIndex - 1].style.display = "block";
//   timer = setTimeout(showSlides, 3000);
// }

  
//-------------------------------

var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 3000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 10000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("Containers");
//   var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 10000);
}





	// 	// translate back to 0 from -100%
	// 	// we don't need transitionend to fire for this translation, so remove transition CSS
	// 	document.querySelector(".containers").classList.remove('slider-container-transition');
	// 	document.querySelector(".containers").style.transform = 'translateX(0)';
	// },

	// gotoNext: function() {
	// 	// translate from 0 to -100% 
	// 	// we need transitionend to fire for this translation, so add transition CSS
	// 	document.querySelector(".containers").classList.add('slider-container-transition');
	// 	document.querySelector(".containers").style.transform = 'translateX(-100%)';