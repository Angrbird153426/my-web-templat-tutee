

// dropdown
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownManu = document.querySelector('.dropdown_manu');

toggleBtn.onclick = function () {
   dropdownManu.classList.toggle('open');
   const isOpen = dropdownManu.classList.contains('open');

   toggleBtnIcon.classList = isOpen
    ? 'bi bi-x'
    : 'bi bi-list'

}

// slideshow-box
let slideIndex = 1;


function currentSlide(n){
    showslides(slideIndex = n);
}
function showslides(n){
    let slides = document.getElementsByClassName("slideshow-box-6");
    let dots = document.getElementsByClassName("dot");
    
     if (n > slides.length) {
         slideIndex = 1}
     if (n < 1) {
         slideIndex = slides.length}


    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
     

      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
}
showslides();