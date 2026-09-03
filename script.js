/* =====================================================
JUSTINE KYLE PALMA PORTFOLIO
PREMIUM JAVASCRIPT
PART 1/2
===================================================== */



// =====================================================
// MOBILE MENU
// =====================================================


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");



if(menuBtn && navLinks){


menuBtn.addEventListener("click",()=>{


navLinks.classList.toggle("active");


menuBtn.classList.toggle("open");


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

threshold:0.15

});





revealElements.forEach(element=>{


revealObserver.observe(element);


});









// =====================================================
// SCROLL TO TOP
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


/* =====================================================
IMAGE GALLERY MODAL
===================================================== */


const modal = document.getElementById("projectModal");

const modalImage = document.getElementById("modalImage");

const closeModal = document.querySelector(".modal-close");

const nextProject = document.getElementById("nextProject");

const prevProject = document.getElementById("prevProject");





let gallery = [];

let currentIndex = 0;









// Collect all clickable images


const projectImages =
document.querySelectorAll(".project-click");





projectImages.forEach(item=>{


item.addEventListener("click",()=>{


gallery = [];





projectImages.forEach(image=>{


gallery.push(
image.dataset.image
);


});







currentIndex =
gallery.indexOf(
item.dataset.image
);






openModal();



});


});









// Open modal


function openModal(){


if(!modal || !modalImage)
return;



modalImage.src =
gallery[currentIndex];



modal.classList.add("active");



document.body.style.overflow="hidden";


}









// Close modal


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









// Click outside close


if(modal){


modal.addEventListener(

"click",

(event)=>{


if(event.target === modal){


closeGallery();


}


}


);


}









// Next image


if(nextProject){


nextProject.addEventListener(

"click",

()=>{


if(gallery.length===0)
return;




currentIndex++;





if(currentIndex >= gallery.length){


currentIndex = 0;


}





modalImage.src =
gallery[currentIndex];



}


);


}









// Previous image


if(prevProject){


prevProject.addEventListener(

"click",

()=>{


if(gallery.length===0)
return;




currentIndex--;





if(currentIndex < 0){


currentIndex =
gallery.length - 1;


}





modalImage.src =
gallery[currentIndex];



}


);


}









// ESC close


document.addEventListener(

"keydown",

(event)=>{


if(event.key === "Escape"){


closeGallery();


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
// IMAGE ERROR HANDLING
// =====================================================


document.querySelectorAll("img")
.forEach(image=>{


image.addEventListener(

"error",

()=>{


console.warn(

"Missing image:",

image.src

);


}


);


});









// =====================================================
// HERO LOAD EFFECT
// =====================================================


window.addEventListener(

"load",

()=>{


document.body.classList.add(

"loaded"

);


}

);
