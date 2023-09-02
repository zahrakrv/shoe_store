import El from '@/library/index.js';
// import routerFunction from '@/router/index.js';
// import publicAxios from '@/instance/axiosPublic';
import routerFunction from '@/router/index.js';

import checkData from '@/functions/checkuserData/index';
import Cookies from 'js-cookie';

const login = () => {
  return El({
    element: 'div',
    id: 'login',
    className: 'h-screen bg-white flex flex-col justify-around items-center',
    child: [
      El({
        element: 'div',
        className: 'w-full pt-5 pl-8',
        child: El({
          element: 'button',
          child: El({
            element: 'ion-icon',
            name: 'arrow-back',
            onclick: goBAckToWelcomePage,
            // eventListener: [
            //   {
            //     event: 'click',
            //     callback: goBAckToWelcomePage,
            //   },
            // ],
          }),
        }),
      }),

      El({
        element: 'img',
        src: 'http://localhost:5173/img/logo/logo2.svg',
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
                    id: 'password-icon',
                    onclick: showPassword,
                    // eventListener: [
                    //   {
                    //     event: 'click',
                    //     callback: showPassword,
                    //   },
                    // ],
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
              El({
                element: 'span',
                id: 'error-input',
                className:
                  'hidden flex justify-center items-center text-red-500 text-xl',
                child: 'Wrong Email or Password',
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
                onclick: () => {
                  const email = document.getElementById('email');
                  const password = document.getElementById('password');
                  checkData(email.value, password.value);
                },
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
// window.onload = function () {
//   const email = document.getElementById('email');
//   const password = document.getElementById('password');
//   const rememberMe = document.getElementById('rememberMe');
//   const Email = Cookies.get('email');
//   const Password = Cookies.get('password');
//   if (Email !== undefined && Password !== undefined) {
//     email.value = Email;
//     password.value = Password;
//     rememberMe.checked = true;
//   }
// };
/// /show password
const showPassword = () => {
  const passwordField = document.getElementById('password');
  const passwordIcon = document.getElementById('password-icon');
  const passwordType =
    passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', passwordType);
  passwordIcon.setAttribute(
    'name',
    passwordType === 'password' ? 'eye-off' : 'eye'
  );
};

/// handling backward button
const goBAckToWelcomePage = () => {
  routerFunction().navigate('/welcomePage');
};
// function showPassword() {
//   const passwordField = document.getElementById('password');
//   if (passwordField.type === 'password') {
//     passwordField.type = 'text';
//   } else {
//     passwordField.type = 'password';
//   }
// }

/// changing route

// routerFunction().navigate('/login');
