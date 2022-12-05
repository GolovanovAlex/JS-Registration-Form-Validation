// ---- ---- login/register ---- ---- //
let log = document.getElementById('login');
let reg = document.getElementById('register');
let btn = document.getElementById('btn');
let box = document.querySelector('.form__box');

function register() {
  log.style.left = '-40rem';
  reg.style.left = '5rem';
  btn.style.left = '11rem';
  box.style.height = '90rem';
}

function login() {
  log.style.left = '5rem';
  reg.style.left = '45rem';
  btn.style.left = '0rem';
  box.style.height = '55rem';
}

// ---- ---- button ---- ---- //
const submitBtns = document.querySelectorAll('.submit_btn');
submitBtns.forEach((submitBtn) => {
  submitBtn.addEventListener('click', function (e) {
    let x = e.clientX - e.target.getBoundingClientRect().left;
    let y = e.clientY - e.target.getBoundingClientRect().top;

    let ripples = document.createElement('span');
    ripples.style.top = y + 'px';
    ripples.style.left = x + 'px';
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);
  });
});
// ---- ---- Form validation ---- ---- //
let userNameInput = document.getElementById('user_name_input');
let userNameError = document.getElementById('user_name_error');
let userNameEmpty = document.getElementById('user_name_empty');

let emailInput = document.getElementById('email_input');
let emailEttor = document.getElementById('email_error');
let emailEmpty = document.getElementById('email_empty');

let phoneInput = document.getElementById('phone_input');
let phoneError = document.getElementById('phone_error');
let phoneEmpty = document.getElementById('phone_empty');
