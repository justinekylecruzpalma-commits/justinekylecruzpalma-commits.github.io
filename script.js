/* =====================================================
PORTFOLIO SCRIPT
CLICKABLE PROJECTS + SAMPLE WORK
===================================================== */


// =====================================================
// MOBILE MENU
// =====================================================


const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn){

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
// IMAGE MODAL
// =====================================================


const modal = document.getElementById("projectModal");

const modalImage = document.getElementById("modalImage");

const closeModal = document.querySelector(".modal-close");


const nextBtn = document.getElementById("nextProject");

const prevBtn = document.getElementById("prevProject");



let gallery = [];

let currentIndex = 0;







// GET ALL CLICKABLE IMAGES


document.querySelectorAll(".project-click")
.forEach((item)=>{


item.addEventListener("click",()=>{


gallery = [];


document.querySelectorAll(".project-click")
.forEach(image=>{


gallery.push(
image.dataset.image
);


});



currentIndex =
gallery.indexOf(item.dataset.image);



openModal();



});



});









// OPEN MODAL


function openModal(){


if(!modal) return;


modalImage.src =
gallery[currentIndex];


modal.classList.add("active");


document.body.style.overflow="hidden";


}









// CLOSE MODAL


if(closeModal){


closeModal.addEventListener("click",()=>{


modal.classList.remove("active");


document.body.style.overflow="auto";


});


}









// CLICK OUTSIDE CLOSE


if(modal){


modal.addEventListener("click",(e)=>{


if(e.target === modal){


modal.classList.remove("active");


document.body.style.overflow="auto";


}


});


}









// NEXT IMAGE


if(nextBtn){


nextBtn.addEventListener("click",()=>{


currentIndex++;



if(currentIndex >= gallery.length){


currentIndex = 0;


}



modalImage.src =
gallery[currentIndex];


});


}









// PREVIOUS IMAGE


if(prevBtn){


prevBtn.addEventListener("click",()=>{


currentIndex--;



if(currentIndex < 0){


currentIndex = gallery.length - 1;


}



modalImage.src =
gallery[currentIndex];


});


}









// ESC CLOSE


document.addEventListener("keydown",(e)=>{


if(e.key==="Escape" && modal){


modal.classList.remove("active");


document.body.style.overflow="auto";


}


});









// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================


const reveals =
document.querySelectorAll(".reveal");



const observer =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("active");


}


});


},{
threshold:0.15
});





reveals.forEach((element)=>{


observer.observe(element);


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
// CONTACT FORM
// =====================================================


function sendMessage(event){


event.preventDefault();



alert(
"Thank you for your message! I will get back to you soon."
);



event.target.reset();


}
