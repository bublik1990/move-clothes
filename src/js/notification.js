const refs = {
  backdropRef: document.querySelector('.backdrop'),
  notificationCloseBtn: document.querySelector('.js-notification-close'),
  notificationText: document.querySelector('.js-notification__text'),
};

let isNotificationMessageOpen = false;

function openNotificationWithSuccess(string) {
  refs.backdropRef.classList.add('notification-success');
  refs.backdropRef.classList.remove('notification-error');
  openNotificationMessage(string);
  closeNotificationMessage();
}

function openNotificationWithError(string) {
  refs.backdropRef.classList.add('notification-error');
  refs.backdropRef.classList.remove('notification-success');
  openNotificationMessage(string);
  closeNotificationMessage();
}

function openNotificationMessage(string) {
  refs.notificationText.textContent = string;
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
