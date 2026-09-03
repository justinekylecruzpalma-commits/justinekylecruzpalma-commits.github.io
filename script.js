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


    navLinks.classList.remove("active");


});


});









// =====================================================
// PROJECT IMAGE DATA
// =====================================================


const galleryImages = [


"images/sample/work1.jpg",

"images/sample/work2.jpg",

"images/sample/work3.jpg",

"images/sample/work4.jpg",

"images/sample/work5.jpg",

"images/sample/work6.jpg"


];





let currentIndex = 0;









// =====================================================
// MODAL ELEMENTS
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









// =====================================================
// OPEN IMAGE MODAL
// =====================================================


document.querySelectorAll(".project-click")
.forEach((item,index)=>{


item.addEventListener("click",()=>{


    currentIndex=index;


    openModal();


});


});









function openModal(){



modalImage.src =
galleryImages[currentIndex];



modal.classList.add("active");



document.body.style.overflow="hidden";



}









// =====================================================
// CLOSE MODAL
// =====================================================


if(closeModal){


closeModal.addEventListener("click",()=>{


    modal.classList.remove("active");


    document.body.style.overflow="auto";


});


}









modal.addEventListener("click",(e)=>{


if(e.target === modal){


    modal.classList.remove("active");


    document.body.style.overflow="auto";


}


});









// =====================================================
// NEXT IMAGE
// =====================================================


if(nextBtn){


nextBtn.addEventListener("click",()=>{


currentIndex++;



if(currentIndex >= galleryImages.length){


    currentIndex=0;


}



changeImage();



});


}









// =====================================================
// PREVIOUS IMAGE
// =====================================================


if(prevBtn){


prevBtn.addEventListener("click",()=>{


currentIndex--;



if(currentIndex < 0){


    currentIndex =
    galleryImages.length-1;


}



changeImage();



});


}









function changeImage(){



modalImage.style.opacity="0";


setTimeout(()=>{


modalImage.src =
galleryImages[currentIndex];


modalImage.style.opacity="1";


},200);



}









// =====================================================
// ESC CLOSE
// =====================================================


document.addEventListener("keydown",(e)=>{


if(e.key==="Escape"){


modal.classList.remove("active");


document.body.style.overflow="auto";


}



});









// =====================================================
// SCROLL REVEAL
// =====================================================


const revealElements =
document.querySelectorAll(
".reveal"
);



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
// SMOOTH SCROLL
// =====================================================


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{


anchor.addEventListener(
"click",
function(e){


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
// SCROLL TO TOP
// =====================================================


const scrollTop =
document.querySelector(".scroll-top");



window.addEventListener("scroll",()=>{


if(window.scrollY > 500){


scrollTop.classList.add("active");


}

else{


scrollTop.classList.remove("active");


}


});






if(scrollTop){


scrollTop.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}









// =====================================================
// CONTACT FORM
// =====================================================


const contactForm =
document.querySelector(".contact-form form");



if(contactForm){


contactForm.addEventListener(
"submit",

(e)=>{


e.preventDefault();



alert(
"Thank you for your message! I will get back to you soon."
);



contactForm.reset();



});


}









// =====================================================
// IMAGE LOADING EFFECT
// =====================================================


document.querySelectorAll("img")
.forEach(img=>{


img.addEventListener("load",()=>{


img.classList.add("loaded");


});


});








console.log(
"Portfolio Website Loaded Successfully 🚀"
);
