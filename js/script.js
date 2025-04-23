

let menus = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", function () {
    menus.classList.add("active");
});


closeBtn.addEventListener("click", function () {
    menus.classList.remove("active");
});



// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3, // Number of slides visible at a time
//     spaceBetween: 30,
//     slidesPerGroup: 1, // Number of slides to move per transition
//     loop: true, // Enables looping
//     loopFillGroupWithBlank: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: "3",
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });


// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     slidesPerGroup: 3,
//     loop: true,
// });

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });
// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     keyboard: {
//         enabled: true,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
// });

// Adding dynamic content



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    // slidesPerGroup: 2,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        }
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        swiper.slideNext(); // Move to the next slide
    } else if (event.key === "ArrowLeft") {
        swiper.slidePrev(); // Move to the previous slide
    }
});


//Dynamic image

const SectionCenter = document.querySelector('.menues_items_container');
const filterBtns = document.querySelectorAll('.btn-cat');

filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {

        const Category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.Category == Category) {

                return menuItem;
            }
        });

        if (Category == "all") {
            displayMenusItem(menu);
        }
        else {
            displayMenusItem(menuCategory);
        }



    })



});




const menu = [
    {
        id: 1,
        title: "chicken and Cashews",
        Category: "Dinner",
        price: 11,
        img: 'imgs/19.png'

    },
    {
        id: 2,
        title: "chicken and Cashews",
        Category: "Lunch",
        price: 30,
        img: 'imgs/03.jpg'

    },
    {
        id: 3,
        title: "chicken and Cashews",
        Category: "Drinks",
        price: 20,
        img: 'imgs/03.jpg'

    },
    {
        id: 4,
        title: "chicken and Cashews",
        Category: "Starter",
        price: 25,
        img: 'imgs/02.jpg'

    },
    {
        id: 5,
        title: "chicken and Cashews",
        Category: "Dinner",
        price: 25,
        img: 'imgs/02.jpg'

    },
    {
        id: 6,
        title: "chicken and Cashews",
        Category: "Dinner",
        price: 22,
        img: 'imgs/02.jpg'

    },
    {
        id: 7,
        title: "chicken and Cashews",
        Category: "Dinner",
        price: 25,
        img: 'imgs/02.jpg'

    },
    {
        id: 8,
        title: "chicken and Cashews",
        Category: "Dinner",
        price: 25,
        img: 'imgs/02.jpg'

    },
    {
        id: 9,
        title: "chicken and Cashews",
        Category: "Dinner",
        price: 25,
        img: 'imgs/02.jpg'

    }
]





window.addEventListener("DOMContentLoaded", function () {
    displayMenusItem(menu);
});
//jkjhkhjk
function displayMenusItem(menuItem) {
    let displayMenusItem = menuItem.map(function (item) {
        return `
            <div class="img_cards">
                <img src="${item.img}" alt="" />
                <p class="pricee">only ${item.price} dollars</p>
                <p>${item.title}</p>
            </div>`;
    });


    displayMenusItem = displayMenusItem.join("");
    SectionCenter.innerHTML = displayMenusItem;
};


// static counter start
// const countersE1 = document.querySelectorAll('.num');

// countersE1.forEach((e) => {
//     e.innerText = "0";
//     increamentCounter();

//     function increamentCounter() {
//         let currentNum = +e.innerText;
//         const dataCiel = e.getAttribute("data-ciel");
//         const increament = dataciel / 15;
//         currentNum = Math.ceil(currentNum + increament);
//         if (currentNum < dataCiel) {
//             e.innerText = currentNum;
//             setTimeout(increamentCounter, 70);
//         } else {
//             countersE1.innerHTML = dataCiel;
//         }
//     }
// });

const countersE1 = document.querySelectorAll('.num');

countersE1.forEach((e) => {
    e.innerText = "0";
    incrementCounter();

    function incrementCounter() {
        let currentNum = +e.innerText;
        const dataCiel = +e.getAttribute("data-ciel"); // Make sure it's a number
        const increment = dataCiel / 15;

        if (currentNum < dataCiel) {
            currentNum = Math.ceil(currentNum + increment);
            e.innerText = currentNum;
            setTimeout(incrementCounter, 70);
        } else {
            e.innerText = dataCiel;
        }
    }
});



// static counter close

// sticky menus start
const nav = document.querySelector("header");
window.addEventListener("scroll", function () {
    if (this.document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }

});

// sticky menus close


// parallel effect start

const Parallax = document.querySelector("#showcase");
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    Parallax.style.backgroundPositionY = offset * 0.7 + "px";
});