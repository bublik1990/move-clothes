const refs = {
  successBtn: document.querySelector('.success'),
  errorBtn: document.querySelector('.error'),
  backdropRef: document.querySelector('.backdrop'),
  notificationCloseBtn: document.querySelector('.js-notification-close'),
};

refs.successBtn.addEventListener('click', openNotificationWithSuccess);
refs.errorBtn.addEventListener('click', openNotificationWithError);

let isNotificationMessageOpen = false;

function openNotificationWithSuccess() {
  refs.backdropRef.classList.add('notification-success');
  refs.backdropRef.classList.remove('notification-error');
  openNotificationMessage();
  closeNotificationMessage();
}

function openNotificationWithError() {
  refs.backdropRef.classList.add('notification-error');
  refs.backdropRef.classList.remove('notification-success');
  openNotificationMessage();
  closeNotificationMessage();
}

function openNotificationMessage() {
  refs.backdropRef.classList.remove('is-hidden');
  refs.notificationCloseBtn.addEventListener('click', closeNotificationMessageByCloseBtn);
  isNotificationMessageOpen = true;
}

function closeNotificationMessage() {
  if (isNotificationMessageOpen) {
    setTimeout(() => {
      refs.backdropRef.classList.add('is-hidden');
      isNotificationMessageOpen = false;
      refs.notificationCloseBtn.removeEventListener('click', closeNotificationMessageByCloseBtn);
    }, 3000);
  }
}

function closeNotificationMessageByCloseBtn() {
  if (isNotificationMessageOpen) {
    refs.backdropRef.classList.add('is-hidden');
    refs.notificationCloseBtn.removeEventListener('click', closeNotificationMessageByCloseBtn);
    refs.isNotificationMessageOpen = false;
  }
}

export { openNotificationWithSuccess, openNotificationWithError };
