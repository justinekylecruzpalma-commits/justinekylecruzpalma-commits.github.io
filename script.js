/* =====================================================
JUSTINE KYLE PALMA PORTFOLIO
FINAL JAVASCRIPT
===================================================== */



// =====================================================
// MOBILE NAVIGATION
// =====================================================


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


if(menuBtn && navLinks){


menuBtn.addEventListener("click",()=>{


navLinks.classList.toggle("active");


});


}







document.querySelectorAll(".nav-links a")
.forEach(link=>{


link.addEventListener("click",()=>{


navLinks.classList.remove("active");


});


});









// =====================================================
// NAVBAR SCROLL EFFECT
// =====================================================


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


if(window.scrollY > 50){


header.classList.add("scrolled");


}

else{


header.classList.remove("scrolled");


}


});









// =====================================================
// SMOOTH SCROLL
// =====================================================


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


anchor.addEventListener("click",function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});


});









// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================


const revealElements =
document.querySelectorAll(".reveal");



const revealObserver =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("active");


}



});


},{

threshold:.15

});





revealElements.forEach(element=>{


revealObserver.observe(element);


});









// =====================================================
// PROJECT + SAMPLE WORK MODAL
// =====================================================


const modal =
document.getElementById("projectModal");


const modalImage =
document.getElementById("modalImage");


const closeModal =
document.querySelector(".modal-close");


const nextBtn =
document.getElementById("nextProject");


const prevBtn =
document.getElementById("prevProject");





let galleryImages = [];

let currentImage = 0;









// GET CLICKABLE IMAGES


const clickableImages =
document.querySelectorAll(".project-click");





clickableImages.forEach(item=>{


item.addEventListener("click",()=>{


galleryImages = [];



clickableImages.forEach(image=>{


galleryImages.push(
image.dataset.image
);


});





currentImage =
galleryImages.indexOf(
item.dataset.image
);





openGallery();



});


});









// OPEN MODAL


function openGallery(){


if(!modal || !modalImage)
return;



modalImage.src =
galleryImages[currentImage];



modal.classList.add("active");



document.body.style.overflow="hidden";


}









// CLOSE MODAL


function closeGallery(){


if(!modal)
return;



modal.classList.remove("active");


document.body.style.overflow="auto";


}









if(closeModal){


closeModal.addEventListener(
"click",
closeGallery
);


}









// CLICK OUTSIDE MODAL


if(modal){


modal.addEventListener(
"click",
(e)=>{


if(e.target === modal){


closeGallery();


}


});


}









// NEXT IMAGE


if(nextBtn){


nextBtn.addEventListener(
"click",
()=>{


if(galleryImages.length === 0)
return;



currentImage++;



if(currentImage >= galleryImages.length){


currentImage = 0;


}



modalImage.src =
galleryImages[currentImage];



});


}









// PREVIOUS IMAGE


if(prevBtn){


prevBtn.addEventListener(
"click",
()=>{


if(galleryImages.length === 0)
return;



currentImage--;



if(currentImage < 0){


currentImage =
galleryImages.length - 1;


}



modalImage.src =
galleryImages[currentImage];



});


}









// ESC KEY CLOSE


document.addEventListener(
"keydown",
(e)=>{


if(e.key === "Escape"){


closeGallery();


}



});









// =====================================================
// SCROLL TO TOP
// =====================================================


const scrollTop =
document.querySelector(".scroll-top");





if(scrollTop){


window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 500){


scrollTop.classList.add("active");


}

else{


scrollTop.classList.remove("active");


}



});


scrollTop.addEventListener(
"click",
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}









// =====================================================
// CONTACT FORM
// =====================================================


function sendMessage(event){


event.preventDefault();



alert(

"Thank you for your message! I will get back to you soon."

);



event.target.reset();


}









// =====================================================
// IMAGE ERROR HANDLER
// =====================================================


document.querySelectorAll("img")
.forEach(img=>{


img.addEventListener(
"error",
()=>{


console.warn(
"Image not found:",
img.src
);


});


});
