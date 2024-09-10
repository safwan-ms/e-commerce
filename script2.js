//SEARCH BOX product-name
var search = document.querySelector(".search")
var productname = document.querySelector(".productlist");
var elements = productname.querySelectorAll("p");
var enteredText = "";

function displaynone(){
 productname.style.display ="none"
}
displaynone()


function check(event) {
    enteredText = event.target.value.toUpperCase();
    if(enteredText === ""){
     productname.style.display ="none";
    }else{
     productname.style.display ="block";
    }

    enteredText = event.target.value.toUpperCase();
     for (var i = 0; i < elements.length; i++) {
         if (elements[i].textContent.toUpperCase().indexOf(enteredText) < 0) {
             elements[i].style.display = "none";   
         }
         else {
            elements[i].style.display = "block"
         } 
     }    
 }

// //  //EYE ICON

const hover = document.getElementById('img-hover');
const eyeIcon = document.getElementById('eye-icon');

hover.addEventListener('mouseover', () => {
    eyeIcon.style.display = "block"
})
hover.addEventListener('mouseout', () => {
    eyeIcon.style.display = "none"
})


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className + "active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

