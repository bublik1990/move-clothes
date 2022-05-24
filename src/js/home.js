import '../sass/base/_reset.scss';
import '../sass/components/_header.scss';
import '../sass/components/_new.scss';
import '../sass/components/_recent.scss';
import '../sass/components/_subscribe.scss';

import '../sass/components/_footer.scss';
import '../sass/home.scss';

const categorySectionEl = document.querySelector('.hero');
const menu = document.querySelector('.header');

document.addEventListener('scroll', reverseMenu);

function reverseMenu() {
  if (!isInViewport(categorySectionEl) && !menu.classList.contains('reversed')) {
    menu.classList.add('reversed');
  }

  if (isInViewport(categorySectionEl) && menu.classList.contains('reversed')) {
    menu.classList.remove('reversed');
  }
}

function isInViewport(elem) {
  const bounding = elem.getBoundingClientRect();
  return bounding.bottom >= 0;
}
