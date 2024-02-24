/* eslint-disable*/ 
import '@babel/polyfill';
import { login , logout , signup} from './login';
import { displayMap } from './mapbox';
import { updateSettings } from './updateSettings';
import { updatePass } from './updatePass';
import { bookTour } from './stripe';
//DOM Elements
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.login-form');
const logoutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-settings');
const userSignUpForm = document.querySelector('.form-user-data.signup');
const bookBtn = document.getElementById('book-tour'); 
//Delegation
if (mapBox)
{

  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

//For new user sign up
if (userSignUpForm){
  userSignUpForm.addEventListener('submit' , e => {
    e.preventDefault();
    const n = document.getElementById('name').value;
    const em = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const confPass = document.getElementById('passwordConfirm').value;
    const userRole = document.getElementById('role').value;
    // console.log( n , em ,pass , confPass, userRole);
    signup(n , em , pass , confPass , userRole);
  });
}


//For Login
if(loginForm){
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        login(email, password); 
    });
}
//For logout
if(logoutBtn) {
    logoutBtn.addEventListener('click' , logout);
}
//For updating user info
if (userDataForm){
  userDataForm.addEventListener('submit', e => {
      e.preventDefault();
      const form = new FormData();
      form.append('name' ,document.getElementById('name').value );
      form.append('email' ,document.getElementById('email').value );
      form.append('photo' ,document.getElementById('photo').files[0]);
      console.log(form);
      updateSettings(form);
  });
}
//For updating password
if (userPasswordForm) {
  userPasswordForm.addEventListener('submit', e => {
    e.preventDefault();
    // document.querySelector('.btn--green').textContent = 'Updating...'; // Update this line
    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    updatePass(passwordCurrent, password, passwordConfirm);

    document.getElementById('test').textContent = 'Save password'; // Update this line
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });
}
//payment integration currently not working
if (bookBtn) {
  bookBtn.addEventListener('click' , e => {
    e.target.textContent = 'Processing...'; 
    const { tourId } = e.target.dataset;
    bookTour(tourId);
  });
}