window.onload = function () {
  setTimeout(removeLoader, 150);
};

function removeLoader() {
  const loader = document.querySelector('.wrapper-loading');
  loader.style.display = 'none';
}
