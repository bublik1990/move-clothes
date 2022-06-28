import '../sass/base/_reset.scss';
import '../sass/components/_modal.scss';

// animations do not work at first loading page
window.addEventListener('load', event => {
  document.querySelector('body').classList.remove('preload');
});

const refs = {
  buttonRef: document.querySelector('.js-openModalBtn'),
  backdropRef: document.querySelector('.backdrop'),
  closeBtnRef: document.querySelector('.modal__close'),
};

refs.buttonRef.addEventListener('click', openModal);
refs.closeBtnRef.addEventListener('click', closeModal);

function openModal() {
  refs.backdropRef.classList.remove('is-hidden');
  window.addEventListener('keydown', closeModalByEsc);
  refs.closeBtnRef.addEventListener('click', closeModal);
  refs.backdropRef.addEventListener('click', closeByClickOnBackdrop);
}

function closeModal() {
  refs.backdropRef.classList.add('is-hidden');
  window.removeEventListener('keydown', closeModalByEsc);
  refs.closeBtnRef.removeEventListener('click', closeModal);
}

function closeModalByEsc(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function closeByClickOnBackdrop(e) {
  if (e.currentTarget === e.target) {
    closeModal();
  }
}
