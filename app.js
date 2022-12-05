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
