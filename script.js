const modal= document.querySelector('.modal')
const button = document.querySelector('#button');
const close = document.querySelector('.modal__content--close')

for(let i = 0; i < button.length; i++)
{
    button[i].addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('visible');
    })
}

close.addEventListener('click', () => {
    console.log('here')
    modal.classList.remove('visible');
    modal.classList.add('hidden');
})
