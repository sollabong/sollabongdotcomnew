/* Open when someone clicks on the hamburger */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
/* Close when someone clicks on the "x" symbol */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


/* Slideshow */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

/* Recommendation  slider */

var slideIndexB = 1;
showSlidesB(slideIndexB);

// Next/previous controls
function plusSlidesB(n) {
  showSlidesB(slideIndexB += n);
}

// Thumbnail image controls
function currentSlideB(n) {
  showSlidesB(slideIndexB = n);
}

function showSlidesB(n) {
  var i;
  var slidesB = document.getElementsByClassName("mySlidesB");
  var dotsB = document.getElementsByClassName("dotB");
  if (n > slidesB.length) {slideIndexB = 1}
  if (n < 1) {slideIndexB = slidesB.length}
  for (i = 0; i < slidesB.length; i++) {
      slidesB[i].style.display = "none";
  }
  for (i = 0; i < dotsB.length; i++) {
    dotsB[i].className = dotsB[i].className.replace(" active", "");
}
  slidesB[slideIndexB-1].style.display = "flex";
  dotsB[slideIndexB-1].className += " active";
}

  /*Scroll to top*/

  mybutton = document.getElementById("myBtn");

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
