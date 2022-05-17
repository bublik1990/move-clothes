export function addToFavorites() {
  this.classList.toggle('is-favorite'); // delete this line

  $.ajax({
    type: 'POST',
    data: this.dataset.id,
    url: '',
    success: function (response) {
      this.classList.toggle('is-favorite');
    },
    error: function (response) {
      console.log('error');
    },
  });
}
