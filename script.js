'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
//console.log(btnsOpenModal);

const openModal = function () {
    //console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

}

btnsCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    // console.log('A key was pressed');
    //console.log(e);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }


});





