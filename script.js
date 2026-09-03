/* =====================================================
JUSTINE KYLE PALMA PORTFOLIO
FINAL SCRIPT.JS
===================================================== */



// =====================================================
// MOBILE MENU
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


if(navLinks){

navLinks.classList.remove("active");

}


});


});









// =====================================================
// NAVBAR SCROLL EFFECT
// =====================================================


const header = document.querySelector("header");



window.addEventListener("scroll",()=>{


if(!header) return;



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

behavior:"smooth",

block:"start"

});


}



});


});









// =====================================================
// SCROLL REVEAL
// =====================================================


const revealElements =
document.querySelectorAll(".reveal");





const observer =
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


observer.observe(element);


});









// =====================================================
// SCROLL TOP BUTTON
// =====================================================


const scrollTop =
document.querySelector(".scroll-top");





if(scrollTop){



window.addEventListener("scroll",()=>{


if(window.scrollY > 500){


scrollTop.classList.add("active");


}

else{


scrollTop.classList.remove("active");


}


});





scrollTop.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}









// =====================================================
// IMAGE MODAL SYSTEM
// SUPPORTS DATA-IMAGE AND DATA-GALLERY
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

let currentIndex = 0;









// GET ALL CLICKABLE IMAGES


const clickableImages =
document.querySelectorAll(".project-click");









clickableImages.forEach(item=>{


item.addEventListener("click",()=>{





// NEW GALLERY SYSTEM

if(item.dataset.gallery){

galleryImages =
item.dataset.gallery
.split(",")
.map(image => image.trim());

}

else if(item.dataset.image){

galleryImages = [

item.dataset.image

];

}





// OLD PROJECT SYSTEM

else if(item.dataset.image){


galleryImages = [

item.dataset.image

];


}







currentIndex = 0;


openImageModal();


});



});









// OPEN MODAL


function openImageModal(){



if(!modal || !modalImage)
return;



modalImage.src =
galleryImages[currentIndex];



modal.classList.add("active");



document.body.style.overflow="hidden";


}









// CLOSE MODAL


function closeImageModal(){


if(!modal)
return;



modal.classList.remove("active");


document.body.style.overflow="auto";


}









if(closeModal){


closeModal.addEventListener(

"click",

closeImageModal

);


}









// CLOSE WHEN CLICK OUTSIDE


if(modal){


modal.addEventListener(

"click",

(e)=>{


if(e.target === modal){


closeImageModal();


}


}


);


}









// NEXT IMAGE


if(nextBtn){


nextBtn.addEventListener(

"click",

()=>{


if(galleryImages.length <= 1)
return;



currentIndex++;





if(currentIndex >= galleryImages.length){


currentIndex = 0;


}





modalImage.src =
galleryImages[currentIndex];



}


);


}









// PREVIOUS IMAGE


if(prevBtn){


prevBtn.addEventListener(

"click",

()=>{


if(galleryImages.length <= 1)
return;



currentIndex--;





if(currentIndex < 0){


currentIndex =
galleryImages.length - 1;


}





modalImage.src =
galleryImages[currentIndex];



}


);


}









// ESCAPE CLOSE


document.addEventListener(

"keydown",

(e)=>{


if(e.key === "Escape"){


closeImageModal();


}


}

);









// =====================================================
// CONTACT FORM
// =====================================================


function sendMessage(event){


event.preventDefault();





const name =
document.getElementById("name").value;



const email =
document.getElementById("email").value;



const message =
document.getElementById("message").value;






if(name && email && message){



alert(

"Thank you for your message! I will get back to you soon."

);



event.target.reset();



}



}









// =====================================================
// IMAGE ERROR CHECK
// =====================================================


document.querySelectorAll("img")
.forEach(img=>{


img.addEventListener(

"error",

()=>{


console.warn(

"Image missing:",

img.src

);


}


);


});









// =====================================================
// PAGE LOAD EFFECT
// =====================================================


window.addEventListener(

"load",

()=>{


document.body.classList.add("loaded");


}

);
