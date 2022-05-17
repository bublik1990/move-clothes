import '../sass/utils/_variables.scss';
import '../sass/base/_reset.scss';

import '../sass/components/_header.scss';
import '../sass/components/_product.scss';
import '../sass/order.scss';
import '../sass/components/_footer.scss';

const moreBtnEl = document.querySelector('.js-more');
const deliveryDetailsEl = document.querySelector('.js-stage__details');
const editInfoBtn = document.querySelector('.js-client-edit');
const client = document.querySelector('.client');
const finishEditingBtn = document.querySelector('.js-finish-editing');
const deliveryBlock = document.querySelector('.delivery');
const paymentBlock = document.querySelector('.payment');
const citiesSelectEl = document.querySelector('.js-cities');
const postTypesEl = document.querySelectorAll('.post__input[name="post"]');
const postAddressBlock = document.querySelector('.js-departments');
const postButtonEl = document.querySelector('.js-post-button');

moreBtnEl.addEventListener('click', showOrderDetails);
editInfoBtn.addEventListener('click', editInfo);
citiesSelectEl.addEventListener('change', findAddress);
postTypesEl.forEach(el => el.addEventListener('change', findAddress));
postButtonEl.addEventListener('click', activatePaymentBlock);

function showOrderDetails() {
  deliveryDetailsEl.classList.toggle('is-hidden');
}

function editInfo() {
  client.classList.add('is-editable');
  finishEditingBtn.addEventListener('click', finishEditing);
  deliveryBlock.classList.add('is-blocked');
  paymentBlock.classList.add('is-blocked');
}

function finishEditing() {
  finishEditingBtn.removeEventListener('click', finishEditing);
  const firstNameEl = document.querySelector('.client__firstname');
  const lastNameEl = document.querySelector('.client__lastname');
  const patronymicEl = document.querySelector('.client__patronymic');
  const emailEl = document.querySelector('.client__mail');
  const phoneEl = document.querySelector('.client__phone');

  const firstName = document.querySelector('input[name="client__firstname"]').value;
  const lastName = document.querySelector('input[name="client__lastname"]').value;
  const patronymic = document.querySelector('input[name="client__patronymic"]').value;
  const email = document.querySelector('input[name="client__mail"]').value;
  const phone = document.querySelector('input[name="client__phone"]').value;

  firstNameEl.innerHTML = firstName;
  lastNameEl.innerHTML = lastName;
  patronymicEl.innerHTML = patronymic;
  emailEl.innerHTML = email;
  phoneEl.innerHTML = phone;

  client.classList.remove('is-editable');
  deliveryBlock.classList.remove('is-blocked');
}

function findAddress(e) {
  console.log(citiesSelectEl.value);
  const currentPostType = document.querySelector('.post__input[name="post"]:checked').value;
  console.log(currentPostType);

  // such type of data are waited from server. Delete this Array
  const addresses = [
    { code: 'code1', department: 'Department 1' },
    { code: 'code2', department: 'Department 2' },
    { code: 'code3', department: 'Department 3' },
  ];
  changePostAddresses(addresses); // delete this line

  $.ajax({
    type: 'POST',
    data: { city: citiesSelectEl.value, postType: currentPostType },
    url: '',
    dataType: 'json',
    success: function (response) {
      changePostAddresses(addresses);
    },
    error: function (response) {
      const errors = response.responseJSON.errors;
      appendOrderFormErrorMessages(errors);
      console.log('error');
    },
  });
}

function changePostAddresses(arr) {
  postAddressBlock.innerHTML = [...arr].reduce((acc, el) => {
    return acc + `<option value="${el.code}">${el.department}</option>`;
  }, '');
}

function activatePaymentBlock() {
  paymentBlock.classList.remove('is-blocked');
}

function appendOrderFormErrorMessages(errors) {
  for (key in errors) {
    const errorMessagesEl = document.querySelector(`label[for="id_${key}"] .errors`);

    for (const error of errors[key]) {
      let li = document.createElement('li');
      li.append(error);
      errorMessagesEl.append(li);
    }
  }
}
