import '../sass/base/_reset.scss';
import '../sass/utils/_variables.scss';
import '../sass/components/_header.scss';
import '../sass/components/_recent.scss';
import '../sass/components/_subscribe.scss';
import '../sass/cart.scss';
import '../sass/components/_product.scss';
import '../sass/components/_footer.scss';
import { addToFavorites } from './addToFavorites';

function setTotalSum() {
  const totalEl = document.querySelector('.js-total');
  const goodsEl = document.querySelectorAll('.product__price');

  const total = [...goodsEl].reduce((acc, el) => acc + Number(el.textContent), 0);
  totalEl.innerHTML = total;
}

setTotalSum();

const favorites = document.querySelectorAll('.product__favorites');
favorites.forEach(el => {
  el.addEventListener('click', addToFavorites.bind(el));
});

const goods = document.querySelectorAll('.product__delete');
goods.forEach(el => {
  el.addEventListener('click', deletePositionFromCart.bind(el));
});

function deletePositionFromCart() {
  const itemEl = this.closest('.product__item');
  const productId = itemEl.dataset.id;
  itemEl.remove(); // delete this line
  checkEmptyCart(); // delete this line
  setTotalSum(); // delete this line

  $.ajax({
    type: 'POST',
    data: productId,
    url: '',
    success: function (response) {
      itemEl.remove();
      checkEmptyCart();
      setTotalSum();
    },
    error: function (response) {
      console.log('error');
    },
  });
}

function checkEmptyCart() {
  const itemEl = document.querySelectorAll('.product__item');
  if (!itemEl.length) {
    document.querySelector('.cart__empty').classList.remove('is-hidden');
    document.querySelector('.cart__form').classList.add('is-hidden');
    document.querySelector('.cart__recent').classList.remove('is-hidden');
  }
}
