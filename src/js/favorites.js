import '../sass/base/_reset.scss';
import '../sass/utils/_variables.scss';
import '../sass/components/_header.scss';
import '../sass/components/_recent.scss';
import '../sass/components/_subscribe.scss';
import '../sass/components/_product.scss';
import '../sass/favorites.scss';
import '../sass/components/_footer.scss';

const favorites = document.querySelectorAll('.product__delete');
favorites.forEach(el => {
  el.addEventListener('click', deleteFromFavorites.bind(el));
});

function deleteFromFavorites() {
  const itemEl = this.closest('.product__item');
  const productId = itemEl.dataset.id;
  itemEl.remove(); // delete this line
  checkEmptyFavoritesList(); // delete this line

  $.ajax({
    type: 'POST',
    data: productId,
    url: '',
    success: function (response) {
      itemEl.remove();
      checkEmptyFavoritesList();
    },
  });
}

function checkEmptyFavoritesList() {
  const itemEl = document.querySelectorAll('.product__item');
  if (!itemEl.length) {
    document.querySelector('.favorites__empty').classList.remove('is-hidden');
    document.querySelector('.favorites__list').classList.add('is-hidden');
  }
}
