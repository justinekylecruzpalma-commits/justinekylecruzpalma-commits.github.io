/* =====================================================
JUSTINE KYLE PALMA PORTFOLIO
COMPLETE SCRIPT.JS
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





// Close mobile menu after clicking link

document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        if(navLinks){

            navLinks.classList.remove("active");

        }


    });


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
// ACTIVE NAVIGATION
// =====================================================


const sections =
document.querySelectorAll("section");


const navItems =
document.querySelectorAll(".nav-links a");




window.addEventListener("scroll",()=>{


    let current="";



    sections.forEach(section=>{


        const sectionTop =
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
// SCROLL REVEAL
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
// NUMBER COUNTER
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



            let count=0;



            let speed =
            Math.ceil(target / 40);





            let timer =
            setInterval(()=>{


                count += speed;



                if(count >= target){


                    count = target;


                    clearInterval(timer);


                }




                counter.innerText =
                count + "+";



            },50);




            counterObserver.unobserve(counter);


        }



    });


},{

threshold:.7

});




counters.forEach(counter=>{


    counterObserver.observe(counter);


});









// =====================================================
// PROJECT GALLERY
// =====================================================


const projectImages = {


    // Graphic Design

    graphic:[

        "images/shirt1.png",

        "images/shirt2.png",

        "images/shirt3.png",

        "images/shirt4.png",

        "images/logo1.png",

        "images/logo2.png"

    ],





    // Analytics

    analytics:[

        "images/analytics1.png",

        "images/analytics2.png",

        "images/analytics3.png",

        "images/analytics4.png"

    ],





    // Projects


    sk:[

        "images/sk-management.png"

    ],




    kk:[

        "images/kk-profiling.png"

    ],





    sgyg:[

        "images/sgyg-system.png"

    ],





    drone:[

        "images/drone-project.png"

    ]

};









let currentProject = "";

let currentImage = 0;









// OPEN PROJECT


function openProject(project){



    const modal =
    document.getElementById(
        "projectModal"
    );



    const image =
    document.getElementById(
        "galleryImage"
    );




    if(!modal || !image){

        return;

    }





    currentProject = project;


    currentImage = 0;





    image.src =
    projectImages[project][0];




    modal.style.display =
    "flex";



    document.body.style.overflow =
    "hidden";



}









// CLOSE PROJECT


function closeProject(){



    const modal =
    document.getElementById(
        "projectModal"
    );



    if(modal){


        modal.style.display =
        "none";


    }




    document.body.style.overflow =
    "auto";



}









// NEXT IMAGE


function nextImage(){



    if(!currentProject){

        return;

    }





    if(
        currentImage <
        projectImages[currentProject].length - 1
    ){



        currentImage++;




        document.getElementById(
            "galleryImage"
        ).src =

        projectImages[currentProject]
        [currentImage];



    }



}









// PREVIOUS IMAGE


function previousImage(){



    if(!currentProject){

        return;

    }





    if(currentImage > 0){



        currentImage--;





        document.getElementById(
            "galleryImage"
        ).src =

        projectImages[currentProject]
        [currentImage];



    }



}









// CLICK OUTSIDE MODAL TO CLOSE


window.addEventListener("click",(e)=>{


    const modal =
    document.getElementById(
        "projectModal"
    );



    if(e.target === modal){


        closeProject();


    }



});









// ESC BUTTON CLOSE


document.addEventListener("keydown",(e)=>{


    if(e.key === "Escape"){


        closeProject();


    }


});









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






    const mailLink =


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
        + name

        +

        "\nEmail: "
        + email

        +

        "\n\nMessage:\n"
        + message

    );





    window.location.href =
    mailLink;



}









// =====================================================
// FOOTER YEAR
// =====================================================


const footerYear =
document.querySelector("footer p");



if(footerYear){


    footerYear.innerHTML =

    `© ${new Date().getFullYear()} Justine Kyle Palma. All Rights Reserved.`;



}









// =====================================================
// PAGE LOADED
// =====================================================


window.addEventListener("load",()=>{


    document.body.classList.add("loaded");


});
