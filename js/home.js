// Images show
var slideShow = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideShow++;
  if (slideShow > slides.length) {
    slideShow = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideShow - 1].style.display = "block";
  dots[slideShow - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Get the login form
var login = document.getElementById("id01");

var register = document.getElementById("id02");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == login) {
    login.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == register) {
    register.style.display = "none";
  }
};
