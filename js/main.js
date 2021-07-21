import '/scss/main.scss';

const mainImg = document.querySelector('#main-img');
const declineBtn = document.querySelector('.decline-btn');
const signUpBtn = document.querySelector('.sign-up-btn');
const emailAddress = document.querySelector('#email-address');
const emailErrorMessage = document.querySelector('.email-message');

function declineOffer(event) {
  event.preventDefault();
}

function successClick(event) {
  event.preventDefault();
  let emailValue = emailAddress.value;
  const regexedEmailValue =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regexedEmailValue.test(emailValue.trim())) {
    mainImg.src = '/imgs/pexels-riciardus-871062.png';
    mainImg.alt = 'Glasses in the sand';
    console.log(mainImg);
  } else {
    emailErrorMessage.classList.add('error-message');
  }
}

declineBtn.addEventListener('click', declineOffer);
signUpBtn.addEventListener('click', successClick);
