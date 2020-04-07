const images = ['../Images/pink.jpg', '../Images/blue.jpg', '../Images/yellow.jpg', '../Images/white.jpg', '../Images/boston.jpg', '../Images/apple.jpg', '../Images/choco.jpg'];
let counter = 0;

document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.slider');
    slide(container);
});

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

