
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const headerh1 = document.querySelector('h1');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
    headerh1.classList.toggle('show');
});