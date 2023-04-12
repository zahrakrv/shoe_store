import shoeCart from '@/components/cartFunc/shoe Cart/index';
import footer from '@/components/home/footer/index';
import El from '@/library/index.js';

const cart = () => {
  return El({
    element: 'div',
    className: 'bg-gray-100 w-full h-full',
    child: [
      El({
        element: 'div',
        className: 'flex justify-between items-center p-6',
        child: [
          El({
            element: 'div',
            className: 'flex justify-between items-center w-full',
            child: [
              El({
                element: 'div',
                className: 'flex justify-center items-center gap-x-5',
                child: [
                  El({
                    element: 'img',
                    src: './img/pics/shoe-sample.png',
                    className: 'w-4 h-4',
                  }),
                  El({
                    element: 'h1',
                    child: 'My Cart',
                    className: 'text-2xl font-semibold',
                  }),
                ],
              }),
              El({
                element: 'div',
                child: El({
                  element: 'button',
                  className: 'flex',
                  child: El({
                    element: 'ion-icon',
                    name: 'search-outline',
                    className: 'text-3xl align-text-top',
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
      shoeCart(),
      shoeCart(),
      shoeCart(),
      shoeCart(),
      shoeCart(),
      shoeCart(),
      shoeCart(),
      shoeCart(),
      shoeCart(),
      El({
        element: 'div',
        className:
          'fixed bottom-[88px] w-full flex justify-center items-center pl-4 py-4 bg-white rounded-tl-2xl rounded-tr-2xl',
        child: [
          El({
            element: 'div',
            className: 'flex flex-col gap-y-1',
            child: [
              El({
                element: 'span',
                child: 'Total price',
                className: 'font-light text-xs text-slate-400',
              }),
              El({
                element: 'span',
                child: '$585.00',
                className: 'font-bold text-lg',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'w-full flex justify-center items-center',
            child: El({
              element: 'button',
              className:
                'bg-black w-4/5 py-3 text-white flex justify-center items-center rounded-full gap-x-4 shadow-2xl shadow-gray-400',
              child: [
                'Checkout',
                El({
                  element: 'ion-icon',
                  name: 'arrow-forward-circle',
                  className: 'text-xs',
                }),
              ],
            }),
          }),
        ],
      }),
      El({
        element: 'div',
        child: footer(),
        className: 'bg-white bottom-0 fixed mb-0 w-full h-24 font-light',
      }),
    ],
  });
};

export default cart;
