const images = ['../Images/pink.jpg', '../Images/blue.jpg', '../Images/yellow.jpg', '../Images/white.jpg', '../Images/boston.jpg', '../Images/apple.jpg', '../Images/choco.jpg'];
const cartAddContainer = Array.from(document.querySelectorAll('.cart-add'));

//handle plus and less signs in store elements
cartAddContainer.forEach(elem => {
    let input = elem.querySelector('.number-donuts');
    let plus = elem.querySelector('.plus');
    let less = elem.querySelector('.less');
    plus.addEventListener('click', () => input.value++);
    less.addEventListener('click', () => {
        if (input.value === '0') return;
        else input.value--;
    })
});

//images slider on homepage functionality
document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.slider');
    slide(container);
});

function slide(container) {
    let counter = 0;
    container.addEventListener('click', e => {
        const backArrow = container.querySelector('.back-arrow');
        const forwardArrow = container.querySelector('.forward-arrow');
        let img = container.querySelector('img');
        let target = e.target;
        let input = document.querySelector('.number-donuts');
        
        if (target === backArrow) {
             input.value = 0;
            if (counter > 0) {
                img.src = images[counter - 1];
                counter--;
            } else {
                img.src = images[images.length - 1];
                counter = images.length - 1;
            }
        } else if (target === forwardArrow) {
            input.value = 0;
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


