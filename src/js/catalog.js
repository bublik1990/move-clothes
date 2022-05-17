import '../sass/base/_reset.scss';
import '../sass/utils/_variables.scss';
import '../sass/components/_header.scss';
import '../sass/components/_recent.scss';
import '../sass/components/_subscribe.scss';
import '../sass/catalog.scss';
import '../sass/components/_footer.scss';
import { addToFavorites } from './addToFavorites';

const favorites = document.querySelectorAll('.catalog__favorites');
const showMoreBtn = document.querySelector('.is-show-more');
const catalogListEl = document.querySelector('.catalog__list');
showMoreBtn.addEventListener('click', showMoreProduction);

favorites.forEach(el => {
  el.addEventListener('click', addToFavorites.bind(el));
});

function showMoreProduction(e) {
  e.preventDefault();

  // delete this array. It is an example to show how it works without backend.
  // pictures do not loads because of Parcel. In Django will be ok
  const arr = [
    {
      image: '../images/catalog/item4.png',
      imageDescription: 'Фото товара',
      name: 'Платье',
      price: '1160',
      id: 45,
    },
    {
      image: '../images/catalog/item7.png',
      imageDescription: 'Фото товара',
      name: 'Костюм',
      price: '900',
      id: 65,
    },
  ];

  const newProductsmarkUp = generateMarkup(arr); //delete this line
  catalogListEl.insertAdjacentHTML('beforeend', newProductsmarkUp); //delete this line

  $.ajax({
    type: 'GET',
    url: '',
    data: {}, //page
    success: function (data) {
      // uncomment
      // const newProductsmarkUp = generateMarkup(data);
      // catalogListEl.insertAdjacentHTML('beforeend', newProductsmarkUp);
    },
  });
}

function generateMarkup(arr) {
  return [...arr].reduce((acc, el) => {
    return (
      acc +
      `<li class="catalog__item">
                    <a class="catalog__link" href="#">
                        <img class="catalog__image" src="${el.image}" alt="${el.imageDescription}">
                        <p class="catalog__name">${el.name}</p>
                        <p class="catalog__price">${el.price}</p>
                    </a>
                    <button class="catalog__favorites" type="button" data-id="${el.id}" aria-label="Add in favorites">
                        <svg class="catalog__icon" width="17" height="17">
                            <use class="" href="../images/icons/sprite.svg#icon-favorites"></use>
                        </svg>
                    </button>
                </li>`
    );
  }, '');
}
