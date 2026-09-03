// =====================================================
// JUSTINE KYLE PALMA PORTFOLIO JAVASCRIPT
// COMPLETE VERSION
// =====================================================



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







// Close menu when clicking navigation links


document
.querySelectorAll(".nav-links a")
.forEach(link=>{


link.addEventListener("click",()=>{


    if(navLinks){

        navLinks.classList.remove("active");

    }


});


});









// =====================================================
// SMOOTH SCROLLING
// =====================================================


document
.querySelectorAll('a[href^="#"]')
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
// ACTIVE NAVBAR WHILE SCROLLING
// =====================================================


const sections =
document.querySelectorAll("section");


const navItems =
document.querySelectorAll(".nav-links a");




window.addEventListener("scroll",()=>{


let current="";



sections.forEach(section=>{


let sectionTop =
section.offsetTop - 200;



if(window.scrollY >= sectionTop){


current =
section.getAttribute("id");


}


});






navItems.forEach(link=>{


link.classList.remove("active");



if(
link.getAttribute("href")
===
"#"+current

){


link.classList.add("active");


}



});


});









// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================


const revealElements =
document.querySelectorAll(".reveal");



const revealObserver =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("active");


}


});


},

{

threshold:.15

}


);





revealElements.forEach(element=>{


revealObserver.observe(element);


});









// =====================================================
// COUNTER ANIMATION
// =====================================================


const counters =
document.querySelectorAll(".hero-stats strong");




const counterObserver =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){



let counter =
entry.target;



let target =
parseInt(counter.innerText);



let number=0;



let speed =
Math.ceil(target / 50);



let interval =
setInterval(()=>{



number += speed;



if(number >= target){


number=target;


clearInterval(interval);


}



counter.innerText =
number + "+";



},40);





counterObserver.unobserve(counter);



}



});


},

{

threshold:.7

}


);





counters.forEach(counter=>{


counterObserver.observe(counter);


});









// =====================================================
// PROJECT IMAGE GALLERY
// =====================================================



const projectImages = {


graphic:[


"images/shirt1.png",

"images/shirt2.png",

"images/shirt3.png",

"images/shirt4.png",

"images/logo1.png",

"images/logo2.png"


],



analytics:[


"images/analytics1.png",

"images/analytics2.png",

"images/analytics3.png",

"images/analytics4.png"


]


};







let currentProject="";

let currentImage=0;







function openProject(project){



const modal =
document.getElementById(
"projectModal"
);



const image =
document.getElementById(
"galleryImage"
);




if(!modal || !image)
return;




currentProject =
project;



currentImage=0;



image.src =
projectImages[project][currentImage];



modal.style.display="flex";



document.body.style.overflow="hidden";


}









function closeProject(){



const modal =
document.getElementById(
"projectModal"
);



if(modal){


modal.style.display="none";


}



document.body.style.overflow="auto";


}









function nextImage(){



if(!currentProject)
return;



if(
currentImage <
projectImages[currentProject].length - 1

){



currentImage++;



document.getElementById(
"galleryImage"
).src =

projectImages[currentProject][currentImage];



}



}









function previousImage(){



if(!currentProject)
return;



if(currentImage > 0){



currentImage--;



document.getElementById(
"galleryImage"
).src =

projectImages[currentProject][currentImage];


}



}









// Close modal by clicking outside


window.addEventListener(
"click",
(e)=>{


const modal =
document.getElementById(
"projectModal"
);



if(e.target === modal){


closeProject();


}



});









// =====================================================
// CONTACT FORM
// =====================================================


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

"mailto:justinekylecruz.palma@gmail.com"

+

"?subject="

+

encodeURIComponent(subject)

+

"&body="

+

encodeURIComponent(

"Name: "
+name

+

"\nEmail: "
+email

+

"\n\nMessage:\n"
+message

);





window.location.href =
mail;


}









// =====================================================
// AUTO FOOTER YEAR
// =====================================================


const footer =
document.querySelector("footer p");



if(footer){


footer.innerHTML =

`
© ${new Date().getFullYear()} Justine Kyle Palma.
All Rights Reserved.
`;


}









// =====================================================
// PAGE LOAD EFFECT
// =====================================================


window.addEventListener(
"load",
()=>{


document.body.classList.add(
"loaded"
);


});
