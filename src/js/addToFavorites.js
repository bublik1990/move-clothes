import { openNotificationWithSuccess, openNotificationWithError } from './notification';

export function addToFavorites() {
  const product = this;
  product.classList.toggle('is-favorite'); // delete this line
  $.ajax({
    type: 'POST',
    data: this.dataset.id,
    url: '',
    success: function (response) {
      product.classList.toggle('is-favorite');
    },
    error: function (response) {
      console.log('error');
      openNotificationWithError('Какой-то текстggh');
    },
  });
}
