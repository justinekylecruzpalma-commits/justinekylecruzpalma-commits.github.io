// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn && navLinks){

    menuBtn.addEventListener("click", ()=>{

        navLinks.classList.toggle("active");

    });

}



document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click", ()=>{

        if(navLinks){

            navLinks.classList.remove("active");

        }

    });

});









// ================= HEADER SCROLL =================


const header = document.getElementById("header");


window.addEventListener("scroll", ()=>{


    if(header){


        if(window.scrollY > 50){

            header.classList.add("sticky");

        }

        else{

            header.classList.remove("sticky");

        }


    }


});









// ================= REVEAL ANIMATION =================


const revealElements = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }


    });


},{

    threshold:0.15

});



revealElements.forEach(element=>{

    observer.observe(element);

});









// ================= IMAGE MODAL =================


const projectModal = document.getElementById("projectModal");

const modalImage = document.getElementById("modalImage");

const modalClose = document.querySelector(".modal-close");

const nextBtn = document.getElementById("nextProject");

const prevBtn = document.getElementById("prevProject");



let galleryImages = [];

let currentIndex = 0;









// OPEN IMAGE MODAL


function openModal(){


    if(!projectModal || !modalImage){

        return;

    }



    modalImage.src = galleryImages[currentIndex];



    modalImage.onerror = ()=>{


        console.log(
            "Image failed:",
            modalImage.src
        );


    };



    projectModal.classList.add("active");


    document.body.style.overflow="hidden";


}









// CLOSE MODAL


function closeModal(){


    if(projectModal){


        projectModal.classList.remove("active");


    }


    document.body.style.overflow="auto";


}









// ================= PROJECT / SAMPLE CLICK =================


const projectItems = document.querySelectorAll(".project-click");



projectItems.forEach(item=>{


    item.addEventListener("click", ()=>{


        galleryImages = [];



        // MULTIPLE IMAGES
        // Graphic Design

        if(item.dataset.gallery){



            galleryImages = item.dataset.gallery

            .split(",")

            .map(image=>image.trim());



        }



        // SINGLE IMAGE
        // Projects / Analytics


        else if(item.dataset.image){



            galleryImages.push(

                item.dataset.image

            );



        }





        console.log(
            "Opening gallery:",
            galleryImages
        );





        if(galleryImages.length > 0){



            currentIndex = 0;


            openModal();



        }



    });


});









// ================= NEXT BUTTON =================


if(nextBtn){


    nextBtn.addEventListener("click", ()=>{



        if(galleryImages.length <= 1){

            return;

        }



        currentIndex++;



        if(currentIndex >= galleryImages.length){


            currentIndex = 0;


        }



        modalImage.src = galleryImages[currentIndex];



    });



}









// ================= PREVIOUS BUTTON =================


if(prevBtn){


    prevBtn.addEventListener("click", ()=>{



        if(galleryImages.length <= 1){

            return;

        }



        currentIndex--;



        if(currentIndex < 0){


            currentIndex = galleryImages.length - 1;


        }



        modalImage.src = galleryImages[currentIndex];



    });



}









// ================= CLOSE MODAL =================


if(modalClose){


    modalClose.addEventListener("click", ()=>{


        closeModal();


    });


}





if(projectModal){


    projectModal.addEventListener("click",(e)=>{


        if(e.target === projectModal){


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
