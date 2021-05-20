'use strict';

const btnsOpen = document.querySelectorAll('.show-modal');
const btnClose = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnsOpen.forEach(btnOpen => {
  btnOpen.addEventListener('click', openModal);
});

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

window.addEventListener('keydown', e => {
  if (e.key == 'Escape') closeModal();
});
