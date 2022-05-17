import '../sass/base/_reset.scss';
import '../sass/utils/_variables.scss';
import '../sass/components/_header.scss';
import '../sass/components/_recent.scss';
import '../sass/components/_subscribe.scss';
import '../sass/components/_ask.scss';
import '../sass/product.scss';
import '../sass/components/_footer.scss';

const openContentBtnRefs = document.querySelectorAll('.js-content-btn');
const addProductToCartBtn = document.querySelector('.js-add-product-btn');
const successMessageEl = document.querySelector('.js-success-message');
const closeNotificationMessageBtn = document.querySelector('.js-notification-close');

openContentBtnRefs.forEach(el => el.addEventListener('click', openContent));
addProductToCartBtn.addEventListener('click', addProductToCart);

$('.card__gallery').slick({
  infinite: true,
  dots: true,
  arrows: true,
  prevArrow: $('.gallery__previos'),
  nextArrow: $('.gallery__next'),
});

function openContent(e) {
  e.currentTarget.parentNode.classList.toggle('is-open');
}

function addProductToCart(e) {
  e.preventDefault();
  showNotificationMessage(); // delete this line
  $.ajax({
    type: 'POST',
    data: $(this).serialize(),
    url: '',
    success: function (response) {
      showNotificationMessage();
    },
    error: function (response) {
      //   const errors = response.responseJSON.errors;
      //   console.log(errors);
    },
  });
}

function showNotificationMessage() {
  successMessageEl.classList.remove('visually-hidden');
  closeNotificationMessageBtn.addEventListener('click', closeNotificationMessage);
}

function closeNotificationMessage() {
  successMessageEl.classList.add('visually-hidden');
  closeNotificationMessageBtn.removeEventListener('click', closeNotificationMessage);
}
