//Moving cage
const cage = document.querySelector('.cages');
const container = document.querySelector('.first-page');

container.addEventListener("mousemove", function (e) {
    let Xaxis = (e.pageX);
    let Yaxis = (e.pageY);
    cage.style.transform = `translateY(${-Yaxis / 20}px) translateX(${-Xaxis / 20}px)`;
});


//drop-down

const dropper = document.querySelector('.dropper');
const menu = document.querySelector('.option');
const arrow = document.querySelector('.arrow');
dropper.addEventListener('click', function (e) {
    menu.classList.toggle('visible');
    arrow.classList.toggle('rotate');
});

const option = document.querySelector('.option');
const selected = document.querySelector('.selected');
const card = document.querySelectorAll('.card');
option.addEventListener('click', function (e) {
    if (e.target.nodeName == 'LI') {
        selected.textContent = e.target.textContent;
    }

    if (e.target.textContent == "Design") {
        for (let i = 0; i < card.length; i++) {
            card[i].classList.add('bw-filter');
        }

    }

    if (e.target.textContent == "Website") {
        for (let i = 0; i < card.length; i++) {
            card[i].classList.remove('bw-filter');
        }
    }
});

//Nav blur
const sliding_page = document.querySelector('.sliding-page');
const navbar = document.querySelector('.navbar');
document.addEventListener("scroll", function (e) {

    let rect = sliding_page.getBoundingClientRect();
    let x = rect.top;
    if (x <= 0) {
        navbar.classList.add('blur');
    }

    else {
        navbar.classList.remove('blur');
    }

});

//Horizontal scrolling by dragging
// const work_card=document.querySelector('.work-card');

// work_card.addEventListener("mousemove",function(e){
//     work_card.scrollLeft-=e.movementX;
// });

//hamberger-menu

const menu_icon = document.querySelector('.mobile-icon');
const menu_btn = document.querySelector('.menu');
const cut_btn = document.querySelector('.cut');
const left_side_nav = document.querySelector('.left-side-nav');
const body = document.querySelector('body');

menu_icon.addEventListener('click', function (e) {

    left_side_nav.classList.toggle('visible');
    document.body.classList.toggle("stop-scrolling");
    left_side_nav.classList.toggle('blur');

    let rect = sliding_page.getBoundingClientRect();
    let x = rect.top;
    if (x <= 0) {
    }
    else {
        navbar.classList.toggle('blur');
    }

    menu_btn.classList.toggle('hide');
    cut_btn.classList.toggle('show');

});