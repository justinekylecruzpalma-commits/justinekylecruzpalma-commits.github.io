// =====================================================
// PORTFOLIO JAVASCRIPT
// NO HTML CHANGES REQUIRED
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






// Close menu after clicking navigation link


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
// ACTIVE NAVIGATION
// =====================================================


const sections =
document.querySelectorAll("section");


const navLinksAll =
document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


let current = "";



sections.forEach(section=>{


const sectionTop =
section.offsetTop - 200;



if(window.scrollY >= sectionTop){


current =
section.getAttribute("id");


}



});





navLinksAll.forEach(link=>{


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
// SCROLL REVEAL
// =====================================================


const reveal =
document.querySelectorAll(".reveal");



const observer =
new IntersectionObserver((entries)=>{


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





reveal.forEach(item=>{


observer.observe(item);


});









// =====================================================
// ANIMATED COUNTERS
// =====================================================


const counters =
document.querySelectorAll(".hero-stats strong");



const counterObserver =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){



let counter =
entry.target;


let target =
parseInt(counter.innerText);



let number = 0;



let interval =
setInterval(()=>{


number++;


counter.innerText =
number+"+";



if(number >= target){


clearInterval(interval);


}



},120);





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
// HERO TEXT TYPING
// WORKS WITH YOUR CURRENT H3
// =====================================================


const heroTitle =
document.querySelector(".hero h3");



if(heroTitle){


const text = [

"Computer Engineering Graduate",

"Virtual Assistant",

"Social Media Manager",

"Digital Support Specialist"

];



let index = 0;



setInterval(()=>{


heroTitle.style.opacity = "0";



setTimeout(()=>{


heroTitle.innerHTML = text[index];

heroTitle.style.opacity = "1";



index++;



if(index >= text.length){

index=0;

}



},300);



},2500);



}









// =====================================================
// FOOTER AUTO YEAR
// =====================================================


const footerText =
document.querySelector("footer p");



if(footerText){


footerText.innerHTML =

`© ${new Date().getFullYear()} Justine Kyle Palma. All Rights Reserved.`;


}









// =====================================================
// CONTACT FORM
// YOUR EXISTING HTML WORKS
// =====================================================


function sendMessage(event){


event.preventDefault();



const name =
document.getElementById("name").value;



const email =
document.getElementById("email").value;



const subject =
document.getElementById("subject").value;



const message =
document.getElementById("message").value;



const mail =

"mailto:justinekylecruz.palma@gmail.com"

+

"?subject="

+

encodeURIComponent(subject)

+

"&body="

+

encodeURIComponent(

"Name: "+name+

"\nEmail: "+email+

"\n\nMessage:\n"+message

);



window.location.href = mail;


}
