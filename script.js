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
// GALLERY IMAGES
// MAKE SURE FILE NAMES MATCH YOUR FOLDER
// =====================================================


const projectImages = {


    graphic:[

        "graphic-design-collage.png",

        "shirt1.png",

        "shirt2.png",

        "shirt3.png",

        "shirt4.png"

    ],



    analytics:[

        "analytics-collage.png",

        "analytics1.png",

        "analytics2.png",

        "analytics3.png",

        "analytics4.png"

    ],



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

    ]


};








let currentProject = "";

let currentImage = 0;








// =====================================================
// OPEN MODAL
// =====================================================


function openProject(project){


    const modal =
    document.getElementById("projectModal");


    const galleryImage =
    document.getElementById("galleryImage");



    if(!modal || !galleryImage){

        console.log("Modal missing");

        return;

    }




    currentProject = project;

    currentImage = 0;



    galleryImage.src =
    projectImages[project][0];



    modal.style.display = "flex";



    setTimeout(()=>{

        modal.classList.add("show");

    },10);



}








// =====================================================
// CLOSE MODAL
// =====================================================


function closeProject(){


    const modal =
    document.getElementById("projectModal");



    if(modal){


        modal.classList.remove("show");



        setTimeout(()=>{


            modal.style.display="none";


        },300);


    }


}








// =====================================================
// NEXT IMAGE
// =====================================================


function nextImage(){


    if(!currentProject){

        return;

    }



    let images =
    projectImages[currentProject];



    if(currentImage < images.length - 1){


        currentImage++;


        changeImage();


    }


}








// =====================================================
// PREVIOUS IMAGE
// =====================================================


function previousImage(){


    if(!currentProject){

        return;

    }



    if(currentImage > 0){


        currentImage--;


        changeImage();


    }


}








// =====================================================
// IMAGE TRANSITION
// =====================================================


function changeImage(){


    const image =
    document.getElementById("galleryImage");



    image.style.opacity="0";

    image.style.transform="scale(.95)";



    setTimeout(()=>{


        image.src =
        projectImages[currentProject][currentImage];



        image.style.opacity="1";

        image.style.transform="scale(1)";



    },200);



}








// =====================================================
// CLOSE WHEN CLICK OUTSIDE
// =====================================================


window.addEventListener("click",(event)=>{


    const modal =
    document.getElementById("projectModal");



    if(event.target === modal){


        closeProject();


    }


});








// =====================================================
// ESC KEY CLOSE
// =====================================================


document.addEventListener("keydown",(event)=>{


    if(event.key === "Escape"){


        closeProject();


    }


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



    let name =
    document.getElementById("name").value;



    let email =
    document.getElementById("email").value;



    let subject =
    document.getElementById("subject").value;



    let message =
    document.getElementById("message").value;



    let body =

    `
Name:
${name}


Email:
${email}


Message:
${message}

    `;



    window.location.href =

    "mailto:justinekylecruz.palma@gmail.com"
    +
    "?subject="
    +
    encodeURIComponent(subject)
    +
    "&body="
    +
    encodeURIComponent(body);



}








// =====================================================
// PAGE LOADED
// =====================================================


window.addEventListener("load",()=>{


    console.log(
        "Portfolio loaded successfully"
    );


});
