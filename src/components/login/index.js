import El from '@/library/index.js';

const login = () => {
  return El({
    element: 'div',
    className: 'h-screen bg-white flex flex-col justify-around items-center',
    child: [
      El({
        element: 'img',
        src: './img/logo/logo2.svg',
      }),
      El({
        element: 'div',
        className: 'flex flex-col gap-y-8',
        child: [
          El({
            element: 'h1',
            child: 'Login to Your Account',
            className: 'text-3xl font-medium',
          }),
          El({
            element: 'div',
            className: 'relative',
            child: [
              El({
                element: 'input',
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
            ],
          }),
          El({
            element: 'div',
            className: 'relative',
            child: [
              El({
                element: 'input',
                type: 'password',
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
                name: 'eye-off',
                className: 'absolute right-4 top-3 text-gray-500',
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
        element: 'button',
        child: 'Sign In',
        className:
          'text-white bg-gray-400 active:bg-black py-2 w-[90%] rounded-full',
      }),
    ],
  });
};

export default login;
