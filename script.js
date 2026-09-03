// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}



// Close menu after clicking link

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});









// ================= SCROLL HEADER =================


const header = document.querySelector("#header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

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





revealElements.forEach(el=>{


    revealObserver.observe(el);


});









// ================= IMAGE MODAL =================


const modal = document.getElementById("projectModal");

const modalImage = document.getElementById("modalImage");

const closeModal = document.querySelector(".modal-close");

const prevBtn = document.getElementById("prevProject");

const nextBtn = document.getElementById("nextProject");



let galleryImages = [];

let currentIndex = 0;









// ================= OPEN IMAGE =================


function openImageModal(){


    if(!modal || !modalImage){

        return;

    }


    modalImage.src = galleryImages[currentIndex];


    modal.classList.add("active");


    document.body.style.overflow="hidden";


}









// ================= PROJECT CLICK =================


const clickableImages = document.querySelectorAll(".project-click");



clickableImages.forEach(item=>{


    item.addEventListener("click",()=>{


        galleryImages = [];



        // SAMPLE WORK MULTIPLE IMAGES

        if(item.dataset.gallery){


            galleryImages = item.dataset.gallery

            .split(",")

            .map(image=>image.trim());


        }



        // NORMAL PROJECT IMAGE

        else if(item.dataset.image){


            galleryImages.push(

                item.dataset.image

            );


        }





        if(galleryImages.length > 0){


            currentIndex = 0;


            openImageModal();


        }


    });


});









// ================= CLOSE MODAL =================


if(closeModal){


    closeModal.addEventListener("click",()=>{


        modal.classList.remove("active");


        document.body.style.overflow="auto";


    });


}









// Close clicking outside image


if(modal){


    modal.addEventListener("click",(e)=>{


        if(e.target === modal){


            modal.classList.remove("active");


            document.body.style.overflow="auto";


        }


    });


}









// ================= NEXT IMAGE =================


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









// ================= PREVIOUS IMAGE =================


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



    const body = 

`Name: ${name}

Email: ${email}


Message:

${message}`;



    window.location.href = 

`mailto:justinekylecruz.palma@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;



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
