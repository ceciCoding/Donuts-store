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
	burgerMenu.classList.remove('active');
}