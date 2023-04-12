import El from '@/library/index.js';
const checkoutModal = () => {
  return El({
    element: 'div',
    className:
      'absolute inset-0 bg-gray-300  bg-opacity-80 flex items-center justify-center z-10"',
    child: [
      El({
        element: 'div',
        className:
          'rounded-3xl pt-4 flex flex-col justify-center items-center w-3/4 bg-white relative',
        child: [
          El({
            element: 'img',
            src: './img/pics/shopping-cart.png',
            className: 'w-44',
          }),
          El({
            element: 'h2',
            child: 'Order Successful!',
            className: 'text-xl font-bold mb-5',
          }),
          El({
            element: 'p',
            child: 'You have successfully made order',
            className: 'text-sm mb-5',
          }),
          /// //////button black ///////
          El({
            element: 'div',
            className: 'px-4 mb-5',
            child: [
              El({
                element: 'button',
                className: 'bg-black rounded-full w-full px-16 py-4',
                child: [
                  El({
                    element: 'div',
                    className: 'flex items-center text-white justify-center',
                    child: [
                      El({
                        element: 'p',
                        className: 'self-center text-md font-bold',
                        child: 'View Order',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          /// gray button
          El({
            element: 'div',
            className: 'px-4 mb-5',
            child: [
              El({
                element: 'button',
                className: 'bg-gray-300 rounded-full w-full px-14 py-4',
                child: [
                  El({
                    element: 'div',
                    className: 'flex items-center text-gray-700 justify-center',
                    child: [
                      El({
                        element: 'p',
                        className: 'self-center text-md font-bold',
                        child: 'View E-Receipt',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
export default checkoutModal;
