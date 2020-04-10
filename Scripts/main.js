const images = ['../Images/pink.jpg', '../Images/blue.jpg', '../Images/yellow.jpg', '../Images/white.jpg', '../Images/boston.jpg', '../Images/apple.jpg', '../Images/choco.jpg'];
let counter = 0;
const plus = Array.from(document.querySelectorAll('.plus'));
const less = Array.from(document.querySelectorAll('.less'));
const addContainer = document.querySelectorAll('.cart-add');
// let number = Array.from(document.querySelectorAll('.number-donuts'));
let numberOfDonuts = 0;

document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.slider');
    slide(container);
});

// plus.forEach(sign => {
//     addEventListener('click', () => {
//         let number = this.querySelector('.less');
//         number.value = (numberOfDonuts + 1);
//         numberOfDonuts++;
//     })   
// });

// less.addEventListener('click', () => {
//     if (number.value <= 0) return;
//     else {
//         number.value = (numberOfDonuts - 1);
//         numberOfDonuts--;
//     }
// });

function slide(container) {
    container.addEventListener('click', e => {
        const backArrow = container.querySelector('.back-arrow');
        const forwardArrow = container.querySelector('.forward-arrow');
        let img = container.querySelector('img');
        let target = e.target;
        
        if (target === backArrow) {
            if (counter > 0) {
                img.src = images[counter - 1];
                counter--;
            } else {
                img.src = images[images.length - 1];
                counter = images.length - 1;
            }
        } else if (target === forwardArrow) {
            if (counter < images.length - 1) {
                img.src = images[counter + 1];
                counter++;
            } else {
                img.src = images[0];
                counter = 0;
            }
        };
    });
}

//burger menu functionality
const openBurgerButton = document.querySelector('.burger');
const closeBurgerButton = document.querySelector('.cross');
const burgerMenu = document.querySelector('.burger-menu');

openBurgerButton.addEventListener('click', () => {
    openBurger(openBurgerButton);
});


closeBurgerButton.addEventListener('click', () => {
    closeBurger(closeBurgerButton);
});

function openBurger(burger) {
    if (burger === null) return;
    burgerMenu.classList.add('active');
}

function closeBurger(burger) {
    if (burger === null) return;
    burgerMenu.classList.remove('active')
}