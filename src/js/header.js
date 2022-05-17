window.addEventListener('load', event => {
  document.querySelector('body').classList.remove('preload');
});

const openMenuBtnEl = document.querySelector('.js-open-menuBtn');
const menuEl = document.querySelector('.header__menu');
const closeMenuBtnEl = document.querySelector('.js-close-menuBtn');
const currentLanguageButton = document.querySelector('.current__language');
const languageMenuList = document.querySelector('.header__internationalization');

openMenuBtnEl.addEventListener('click', openMenu);
currentLanguageButton.addEventListener('click', showLanguageMenu);

function openMenu(e) {
  e.stopImmediatePropagation();
  menuEl.classList.add('is-open');
  closeMenuBtnEl.addEventListener('click', closeMenu);
  document.addEventListener('click', closeByClickOutMenu);
  document.addEventListener('keydown', closeByEscape);

  const categories = document.querySelectorAll('.menu__element');
  categories.forEach(el => el.addEventListener('click', openSubcategories));
}

function closeMenu() {
  menuEl.classList.remove('is-open');
  closeMenuBtnEl.removeEventListener('click', closeMenu);
  document.removeEventListener('click', closeByClickOutMenu);
  document.removeEventListener('keydown', closeByEscape);

  setTimeout(closeAllSubcategories, 250);
}

function closeAllSubcategories() {
  const categories = document.querySelectorAll('.menu__category');
  categories.forEach(el => {
    if (el.classList.contains('is-open')) {
      el.classList.remove('is-open');
    }
  });
}

function closeByClickOutMenu(e) {
  if (!menuEl.contains(e.target)) {
    closeMenu();
  }
}

function closeByEscape(e) {
  if (e.code === 'Escape') {
    closeMenu();
  }
}

function openSubcategories(e) {
  e.currentTarget.parentNode.classList.toggle('is-open');
}

// language menu

function toggleLanguageMenu() {
  languageMenuList.classList.toggle('is-open');
}

function openLanguageMenu() {
  document.addEventListener('click', closeByClickOutLanguageMenu);
}

function closeLanguageMenu() {
  document.removeEventListener('click', closeByClickOutLanguageMenu);
}

function showLanguageMenu(e) {
  if (!languageMenuList.classList.contains('is-open')) {
    openLanguageMenu();
  } else {
    closeLanguageMenu();
  }
  toggleLanguageMenu();
}

function closeByClickOutLanguageMenu(e) {
  if (!languageMenuList.contains(e.target)) {
    toggleLanguageMenu();
    closeLanguageMenu();
  }
}
