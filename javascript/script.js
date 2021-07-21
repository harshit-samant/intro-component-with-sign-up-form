//jshint esversion : 6

let firstName = document.getElementById('fName');
let lastName = document.getElementById('lName');
let email = document.getElementById('email');
let password = document.getElementById('psswd');

let fNameValidationTxt = document.getElementById('fNameValidationTxt');
let lNameValidationTxt = document.getElementById('lNameValidationTxt');
let emailValidationTxt = document.getElementById('emailValidationTxt');
let psswdValidationTxt = document.getElementById('psswdValidationTxt');

let fNameErrorIcon = document.getElementById('fNameErrorIcon');
let lNameErrorIcon = document.getElementById('lNameErrorIcon');
let emailErrorIcon = document.getElementById('emailErrorIcon');
let psswdErrorIcon = document.getElementById('psswdErrorIcon');

const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

email.onkeydown = () => {
  if (regex.test(email.value) || !email.value) {
    emailValidationTxt.style.visibility = 'hidden';
    emailErrorIcon.style.visibility = 'hidden';
    email.classList.add("input-normal");
    email.classList.remove("input-red");

  } else {
    emailValidationTxt.style.visibility = 'visible';
    emailErrorIcon.style.visibility = 'visible';
    email.classList.add("input-red");
    email.classList.remove("input-normal");
  }
};

firstName.onkeydown = () => {
  if (firstName.value === '') {

    fNameErrorIcon.style.visibility = 'visible';
    fNameValidationTxt.style.visibility = 'visible';
    firstName.classList.add("input-red");
    firstName.classList.remove("input-normal");

  } else {

    fNameErrorIcon.style.visibility = 'hidden';
    fNameValidationTxt.style.visibility = 'hidden';
    firstName.classList.add("input-normal");
    firstName.classList.remove("input-red");
  }
};  

  lastName.onkeydown = () => {
    if (lastName.value === '') {

      lNameErrorIcon.style.visibility = 'visible';
      lNameValidationTxt.style.visibility = 'visible';
      lastName.classList.add("input-red");
      lastName.classList.remove("input-normal");

    } else {

      lNameErrorIcon.style.visibility = 'hidden';
      lNameValidationTxt.style.visibility = 'hidden';
      lastName.classList.add("input-normal");
      lastName.classList.remove("input-red");
    }
  };

    psswd.onkeydown = () => {
      if (psswd.value === '') {

        psswdErrorIcon.style.visibility = 'visible';
        psswdValidationTxt.style.visibility = 'visible';
        psswd.classList.add("input-red");
        psswd.classList.remove("input-normal");

      } else {

        psswdErrorIcon.style.visibility = 'hidden';
        psswdValidationTxt.style.visibility = 'hidden';
        psswd.classList.add("input-normal");
        psswd.classList.remove("input-red");
      }
    };
