// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}


document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        if(navLinks){

            navLinks.classList.remove("active");

        }

    });

});









// ================= HEADER SCROLL =================


const header = document.getElementById("header");


window.addEventListener("scroll",()=>{


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









// ================= IMAGE MODAL =================


const projectModal = document.getElementById("projectModal");

const modalImage = document.getElementById("modalImage");

const modalClose = document.querySelector(".modal-close");

const nextBtn = document.getElementById("nextProject");

const prevBtn = document.getElementById("prevProject");



let galleryImages = [];

let currentIndex = 0;









// OPEN MODAL


function openModal(){


    if(!projectModal || !modalImage){

        return;

    }


    modalImage.src = galleryImages[currentIndex];


    projectModal.classList.add("active");


    document.body.style.overflow = "hidden";


}









// CLOSE MODAL


function closeModal(){


    if(projectModal){

        projectModal.classList.remove("active");

    }


    document.body.style.overflow = "auto";


}









// CLICK PROJECT / SAMPLE WORK


const projectItems = document.querySelectorAll(".project-click");



projectItems.forEach(item=>{


    item.addEventListener("click",()=>{


        galleryImages = [];



        // MULTIPLE IMAGES
        // Example:
        // data-gallery="shirt1.png,shirt2.png"


        if(item.dataset.gallery){


            galleryImages = item.dataset.gallery

            .split(",")

            .map(image=>image.trim());


        }



        // SINGLE IMAGE
        // Existing projects


        else if(item.dataset.image){


            galleryImages.push(

                item.dataset.image

            );


        }





        if(galleryImages.length > 0){


            currentIndex = 0;


            console.log("Gallery:", galleryImages);


            openModal();


        }


    });


});









// CLOSE BUTTON


if(modalClose){


    modalClose.addEventListener("click",()=>{


        closeModal();


    });


}









// CLICK OUTSIDE MODAL


if(projectModal){


    projectModal.addEventListener("click",(event)=>{


        if(event.target === projectModal){


            closeModal();


        }


    });


}









// NEXT IMAGE


if(nextBtn){


    nextBtn.addEventListener("click",()=>{


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









// PREVIOUS IMAGE


if(prevBtn){


    prevBtn.addEventListener("click",()=>{


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









// ================= CONTACT FORM =================


function sendMessage(event){


    event.preventDefault();



    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const subject = document.getElementById("subject").value;

    const message = document.getElementById("message").value;



    const mailBody = `

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

    encodeURIComponent(mailBody);



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
