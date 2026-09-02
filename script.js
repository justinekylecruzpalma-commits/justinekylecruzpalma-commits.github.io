// =====================================================
// MOBILE MENU
// =====================================================


const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});





// Close menu when clicking link

document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


    });


});









// =====================================================
// ACTIVE NAVIGATION ON SCROLL
// =====================================================


const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop = section.offsetTop - 150;


        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }


    });



    navItems.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){


            link.classList.add("active");


        }


    });



});









// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================


const revealElements = document.querySelectorAll(".reveal");



const revealObserver = new IntersectionObserver(

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



revealElements.forEach(element=>{


    revealObserver.observe(element);


});









// =====================================================
// HERO TYPING EFFECT
// =====================================================


const typingText = document.querySelector(".hero h3");


const roles = [

"Computer Engineering Graduate",

"Virtual Assistant",

"Social Media Manager",

"Digital Support Specialist"

];



let roleIndex = 0;

let charIndex = 0;

let deleting = false;



function typeEffect(){


    const currentRole = roles[roleIndex];


    if(!deleting){


        typingText.innerHTML = 
        currentRole.substring(0,charIndex++);


        if(charIndex > currentRole.length){


            deleting = true;


            setTimeout(typeEffect,1200);

            return;


        }



    }

    else{


        typingText.innerHTML = 
        currentRole.substring(0,charIndex--);



        if(charIndex < 0){


            deleting=false;


            roleIndex=(roleIndex+1)%roles.length;


        }


    }



    setTimeout(typeEffect,80);


}



typeEffect();









// =====================================================
// COUNTER ANIMATION
// =====================================================


const counters=document.querySelectorAll(".hero-stats strong");



const counterObserver=new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){



const counter=entry.target;


const target=parseInt(counter.innerText);



let count=0;



const update=()=>{


    if(count < target){


        count++;


        counter.innerText=count+"+";


        setTimeout(update,150);


    }


};



update();



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
// FOOTER YEAR AUTO UPDATE
// =====================================================


const footerYear=document.querySelector("footer p");


if(footerYear){


footerYear.innerHTML =

`
© ${new Date().getFullYear()} Justine Kyle Palma.
All Rights Reserved.
`;


}









// =====================================================
// CONTACT FORM
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



window.location.href=mail;



}
