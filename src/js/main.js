import '/scss/main.scss';

const declineBtn = document.querySelector('.decline-btn');
const signUpBtn = document.querySelector('.sign-up-btn');

function declineOffer(event) {
  event.preventDefault();
}

function successClick(event) {
  event.preventDefault();

  let formContainer = document.querySelector('.pop-up-form-container');
  let successMessage = document.querySelector('.pop-up-success-message');
  let mainImg = document.querySelector('#main-img');

  let emailAddress = document.querySelector('#email-address');
  let emailErrorMessage = document.querySelector('.email-message');
  let emailValue = emailAddress.value;

  const regexedEmailValue =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regexedEmailValue.test(emailValue.trim())) {
    mainImg.src = 'imgs/pexels-riciardus-871062.png';
    mainImg.alt = 'Glasses in the sand';

    formContainer.classList.add('success');
    successMessage.classList.add('success');
  } else {
    emailErrorMessage.classList.add('error-message');
  }
}

declineBtn.addEventListener('click', declineOffer);
signUpBtn.addEventListener('click', successClick);
