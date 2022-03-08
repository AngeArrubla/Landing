const modal = document.querySelector('.modal');
const buttonMommy = document.querySelector('#button-mommy');
const buttonPhantom = document.querySelector('#button-phantom');
const buttonCat = document.querySelector('#button-cat');
const closeButton = document.querySelector('.modal__content--close');

buttonMommy.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});
buttonCat.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});
buttonPhantom.addEventListener('click', () => {
    // 1ra Forma
    // modal.className = 'modal visible';
    //2da Forma
    // modal.style.display = 'grid';

    modal.classList.remove('hidden');
    modal.classList.add('visible');
});
closeButton.addEventListener('click', () => {
    // modal.style.display = 'none';

    modal.classList.remove('visible');
    modal.classList.add('hidden');
});