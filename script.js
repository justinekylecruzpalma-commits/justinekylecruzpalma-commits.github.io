// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn && navLinks){

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if(navLinks){

            navLinks.classList.remove("active");

        }

    });

});









// ================= HEADER SCROLL =================

const header = document.getElementById("header");


window.addEventListener("scroll", () => {


    if(header){


        if(window.scrollY > 50){

            header.classList.add("sticky");

        }

        else{

            header.classList.remove("sticky");

        }


    }


});









// ================= SCROLL REVEAL =================


const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver((entries)=>{


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









// ================= IMAGE MODAL SYSTEM =================


const modal = document.getElementById("projectModal");

const modalImage = document.getElementById("modalImage");

const closeBtn = document.querySelector(".modal-close");

const nextBtn = document.getElementById("nextProject");

const prevBtn = document.getElementById("prevProject");



let galleryImages = [];

let currentIndex = 0;









// LOAD IMAGE


function loadImage(){


    if(!modalImage){

        return;

    }



    const image = galleryImages[currentIndex];



    console.log("Loading:", image);



    modalImage.src = image;



    modalImage.onload = ()=>{


        console.log("Image loaded:", image);


    };



    modalImage.onerror = ()=>{


        console.log("Image failed:", image);


    };


}









// OPEN MODAL


function openModal(){


    if(!modal){

        return;

    }



    loadImage();



    modal.classList.add("active");



    document.body.style.overflow="hidden";


}









// CLOSE MODAL


function closeModal(){


    if(modal){


        modal.classList.remove("active");


    }



    document.body.style.overflow="auto";


}









// CLICK PROJECT / SAMPLE WORK


const projectItems = document.querySelectorAll(".project-click");



projectItems.forEach(item=>{


    item.addEventListener("click",()=>{


        galleryImages = [];



        // MULTIPLE IMAGES
        // Example:
        // shirt1.png,shirt2.png...


        const gallery = item.getAttribute("data-gallery");



        if(gallery){


            galleryImages = gallery

            .split(",")

            .map(image=>image.trim());


        }



        // SINGLE IMAGE


        const image = item.getAttribute("data-image");



        if(image && galleryImages.length === 0){


            galleryImages.push(image);


        }



        console.log(
            "Gallery:",
            galleryImages
        );



        if(galleryImages.length > 0){


            currentIndex = 0;


            openModal();


        }



    });


});









// NEXT BUTTON


if(nextBtn){


    nextBtn.addEventListener("click",()=>{


        if(galleryImages.length <= 1){

            return;

        }



        currentIndex++;



        if(currentIndex >= galleryImages.length){


            currentIndex = 0;


        }



        loadImage();



    });


}









// PREVIOUS BUTTON


if(prevBtn){


    prevBtn.addEventListener("click",()=>{


        if(galleryImages.length <= 1){

            return;

        }



        currentIndex--;



        if(currentIndex < 0){


            currentIndex = galleryImages.length - 1;


        }



        loadImage();



    });


}









// CLOSE BUTTON


if(closeBtn){


    closeBtn.addEventListener("click",()=>{


        closeModal();


    });


}









// CLICK OUTSIDE MODAL


if(modal){


    modal.addEventListener("click",(event)=>{


        if(event.target === modal){


            closeModal();


        }


    });


}









// ================= CONTACT FORM =================


function sendMessage(event){


    event.preventDefault();



    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const subject = document.getElementById("subject").value;

    const message = document.getElementById("message").value;



    const body = `

Name:
${name}


Email:
${email}


Message:
${message}

`;



    window.location.href =

    "mailto:justinekylecruz.palma@gmail.com" +

    "?subject=" +

    encodeURIComponent(subject) +

    "&body=" +

    encodeURIComponent(body);


}









// ================= SMOOTH SCROLL =================


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        const target = document.querySelector(

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
