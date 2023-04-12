import El from '@/library/index.js';
import Cookies from 'js-cookie';
// import routerFunction from '@/router/index';
const login = () => {
  return El({
    element: 'div',
    id: 'login',
    className: 'h-screen bg-white flex flex-col justify-around items-center',
    child: [
      El({
        element: 'img',
        src: './img/logo/logo2.svg',
      }),

      El({
        element: 'form',
        name: 'formLogin',
        id: 'form-login',
        onsubmit: validation,
        child: [
          El({
            element: 'div',
            className: 'flex flex-col gap-y-8 mb-16',
            child: [
              El({
                element: 'h1',
                child: 'Login to Your Account',
                className: 'text-3xl font-medium',
              }),
              El({
                element: 'div',
                className: 'relative flex flex-col',
                child: [
                  El({
                    element: 'input',
                    id: 'email',
                    name: 'email',
                    type: 'email',
                    placeholder: 'Email',
                    className:
                      'bg-gray-50 rounded w-full py-2 pl-12 focus:outline-black',
                  }),
                  El({
                    element: 'ion-icon',
                    name: 'mail',
                    className: 'absolute left-4 top-3 text-gray-500',
                  }),
                  El({
                    element: 'span',
                    id: 'emailError',
                    className: 'hidden text-center rounded mt-2 text-red-400 ',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'relative flex flex-col',
                child: [
                  El({
                    element: 'input',
                    id: 'password',
                    type: 'password',
                    name: 'password',
                    placeholder: 'Password',
                    className:
                      'bg-gray-50 rounded w-full py-2 pl-12 focus:outline-black',
                  }),
                  El({
                    element: 'ion-icon',
                    name: 'lock-closed',
                    className: 'absolute left-4 top-3 text-gray-500',
                  }),
                  El({
                    element: 'ion-icon',
                    onclick: showPassword,
                    name: 'eye-off',
                    className: 'absolute right-4 top-3 text-gray-500',
                  }),
                  El({
                    element: 'span',
                    id: 'passwordError',
                    className: 'hidden text-center rounded mt-7 text-red-400',
                  }),
                ],
              }),
              El({
                element: 'label',
                className: 'flex self-center',
                child: [
                  El({
                    element: 'input',
                    type: 'checkbox',
                    id: 'rememberMe',
                    name: 'rememberMe',
                    className: 'mr-2',
                  }),
                  El({
                    element: 'span',
                    child: 'Remember me',
                    className: 'font-light',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex justify-center',
            child: [
              El({
                element: 'input',
                type: 'submit',
                value: 'Sign In',
                className:
                  'text-white bg-gray-400 active:bg-black py-2 w-[90%] rounded-full',
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

export default login;

const validation = (e) => {
  e.preventDefault();
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const rememberMe = document.getElementById('rememberMe');

  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  let status = true;
  if (email.value === '') {
    emailError.innerHTML = 'Please Enter Your Email';
    emailError.classList.remove('hidden');
    status = false;
  } else {
    emailError.classList.add('hidden');
  }
  if (password.value === '') {
    passwordError.innerHTML = 'Please Enter Your password';
    passwordError.classList.remove('hidden');
    status = false;
  } else if (password.value.length < 4) {
    passwordError.innerHTML = 'password must be at least 4 character';
    passwordError.classList.remove('hidden');
    status = false;
  } else {
    passwordError.classList.add('hidden');
  }
  if (rememberMe.checked) {
    Cookies.set('email', email.value, { expires: 2 });
    Cookies.set('password', password.value, { expires: 2 });
  } else {
    Cookies.remove('password');
    Cookies.remove('email');
  }
  return status;
};
window.onload = function () {
  const email = Cookies.get('email');
  const password = Cookies.get('password');
  if (email !== undefined && password !== undefined) {
    document.getElementById('email').value = email;
    document.getElementById('password').value = password;
    document.getElementById('rememberMe').checked = true;
  }
};
/// /show password
function showPassword() {
  const passwordField = document.getElementById('password');
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
  } else {
    passwordField.type = 'password';
  }
}

/// changing route

// routerFunction().navigate('/login');

// export const validation = (e) => {
//   e.preventDefault();
//   isValidEmail();
//   // const email = document.formLogin.Email.value;
//   const password = document.formLogin.Pass.value;
//   let status = false;
//   if (password.length < 4 || password.value === '') {
//     document.getElementById('pass-span').classList.remove('hidden');
//     document.getElementById('pass-span').innerHTML =
//       'password must be atleast 4 character';
//     status = false;
//   } else {
//     document.getElementById('pass-span').innerHTML = 'correct';
//     status = true;
//   }
//   return status;
// };
// const form = document.createElement('form-login');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const validation = (e) => {
//   e.preventDefault();
//   validateInputs();
// };
// const setError = (element, message) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector('.error');

//   errorDisplay.innerText = message;
//   inputControl.classList.add('error');
//   inputControl.classList.remove('success');
// };
// const setSuccess = (element) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector('.error');

//   errorDisplay.innerText = '';
//   inputControl.classList.add('success');
//   inputControl.classList.remove('error');
// };

// const isValidEmail = (email) => {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

// const validateInputs = () => {
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();

//   if (emailValue === '') {
//     setError(email, 'Email is required');
//   } else if (!isValidEmail(emailValue)) {
//     setError(email, 'Provide a valid email address');
//   } else {
//     setSuccess(email);
//   }
//   if (passwordValue === '') {
//     setError(password, 'Password is required');
//   } else if (passwordValue.length < 4) {
//     setError(password, 'Password must be at least 4 character.');
//   } else {
//     setSuccess(password);
//   }
// };
