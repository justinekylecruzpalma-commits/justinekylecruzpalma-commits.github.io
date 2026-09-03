/* =====================================================
PORTFOLIO JAVASCRIPT
JUSTINE KYLE PALMA
===================================================== */


/* =====================================================
MOBILE NAVIGATION
===================================================== */


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






/* =====================================================
PROJECT GALLERY DATA
===================================================== */


const projectImages = {


/* TECH PROJECTS */

sk:[

"sk-management.png"

],



kk:[

"kk-profiling.png"

],



sgyg:[

"sgyg-system.png"

],



drone:[

"drone-project.png"

],






/* SAMPLE WORK */


graphic:[


"graphic-design-collage.png",


"shirt1.png",

"shirt2.png",

"shirt3.png",

"shirt4.png",

"shirt5.png"


],




analytics:[


"analytics-collage.png",

"analytics1.png",

"analytics2.png",

"analytics3.png",

"analytics4.png"


]


};







let currentProject = "";

let currentImageIndex = 0;








/* =====================================================
OPEN PROJECT MODAL
===================================================== */


function openProject(project){


const modal =
document.getElementById("projectModal");


const image =
document.getElementById("galleryImage");



currentProject = project;

currentImageIndex = 0;



image.style.opacity="0";



setTimeout(()=>{


image.src =
projectImages[project][0];

image.style.opacity="1";


},200);





modal.style.display="flex";



setTimeout(()=>{


modal.classList.add("show");


},10);



}








/* =====================================================
CLOSE MODAL
===================================================== */


function closeProject(){


const modal =
document.getElementById("projectModal");


modal.classList.remove("show");



setTimeout(()=>{


modal.style.display="none";


},300);



}








/* =====================================================
NEXT IMAGE
===================================================== */


function nextImage(){


let gallery =
projectImages[currentProject];



if(currentImageIndex <
gallery.length - 1){


currentImageIndex++;



changeGalleryImage();


}



}







/* =====================================================
PREVIOUS IMAGE
===================================================== */


function previousImage(){



if(currentImageIndex > 0){


currentImageIndex--;



changeGalleryImage();


}



}







/* =====================================================
CHANGE IMAGE ANIMATION
===================================================== */


function changeGalleryImage(){


const image =
document.getElementById("galleryImage");



image.style.opacity="0";

image.style.transform=
"scale(.95)";



setTimeout(()=>{


image.src =
projectImages[currentProject]
[currentImageIndex];



image.style.opacity="1";

image.style.transform=
"scale(1)";



},200);



}








/* =====================================================
CLICK OUTSIDE MODAL CLOSE
===================================================== */


window.addEventListener("click",(e)=>{


const modal =
document.getElementById("projectModal");



if(e.target === modal){

closeProject();

}



});








/* =====================================================
SCROLL REVEAL ANIMATION
===================================================== */


const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("active");


}


});


},

{

threshold:0.15

}

);





document.querySelectorAll(".reveal")
.forEach((element)=>{


observer.observe(element);


});









/* =====================================================
SMOOTH SCROLL
===================================================== */


document.querySelectorAll(
'a[href^="#"]'
)

.forEach(anchor=>{


anchor.addEventListener(
"click",

function(e){


let target =
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









/* =====================================================
CONTACT FORM
===================================================== */


function sendMessage(event){


event.preventDefault();



let name =
document.getElementById("name").value;



let email =
document.getElementById("email").value;



let subject =
document.getElementById("subject").value;



let message =
document.getElementById("message").value;




let mail =
`mailto:justinekylecruz.palma@gmail.com?
subject=${subject}
&body=

Name:
${name}

Email:
${email}

Message:
${message}
`;



window.location.href =
mail;



}









/* =====================================================
NAVBAR SCROLL EFFECT
===================================================== */


window.addEventListener(
"scroll",

()=>{


const header =
document.querySelector("header");



if(window.scrollY > 50){


header.classList.add("scrolled");


}

else{


header.classList.remove("scrolled");


}



});








/* =====================================================
IMAGE LOADING EFFECT
===================================================== */


document.querySelectorAll("img")
.forEach(img=>{


img.addEventListener(
"load",

()=>{


img.classList.add("loaded");


});


});








console.log(
"Portfolio Loaded Successfully 🚀"
);
