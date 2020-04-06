const donutImages = ["../Images/pink", "../Images/blue", "../Images/choco", "../Images/apple", "../Images/boston", "../Images/yellow", "../Images/white"]
let counter = 0;

document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector("carousel");
    carousel(container);
})

function carousel(container) {
    container.addEventListener('click', e => {
        const backArrow = container.querySelector("back-arrow");
        const forwardArrow = container.querySelector("forward-arrow");
        const img = container.querySelector("img");
        const target = e.target;

        if (target === backArrow) {
            if (counter > 0) {
                img.src = donutImages[counter - 1];
                counter--;
            } else {
                img.src = donutImages[donutImages.length - 1];
                counter = donutImages.length - 1;
            }
        } else if (target === forwardArrow){
            if (counter < donutImages.length - 1) {
                img.src = donutImages[counter + 1];
                counter++;
            } else {
                img.src = donutImages[0];
                counter = 0;
            }
        }
    })
}