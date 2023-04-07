import El from '@/library/index.js';
const checkout = () => {
  return El({
    element: 'div',
    className: 'p-4 items-center',
    child: [
      El({
        element: 'div',
        className: 'p-4 flex justify-between',
        child: [
          El({
            element: 'div',
            className: 'flex gap-3',
            child: [
              El({
                element: 'ion-icon',
                name: 'arrow-back',
                className: 'text-3xl',
              }),
              El({
                element: 'h1',
                child: 'Checkout',
                className: 'text-2xl font-bold',
              }),
            ],
          }),

          El({
            element: 'ion-icon',
            name: 'ellipsis-horizontal-circle',
            className: 'text-3xl',
          }),
        ],
      }),
      El({
        element: 'h2',
        child: 'Shipping Address',
        className: 'text-xl font-bold text-left p-4',
      }),
      El({
        element: 'div',
        className:
          'flex items-center justify-between text-left p-4 shadow-md rounded',
        child: [
          El({
            element: 'div',
            className: 'flex justify-center items-center gap-3',

            child: [
              El({
                element: 'div',
                className:
                  'relative rounded-full bg-gray-200 w-20 h-20 text-center',
                child: [
                  El({
                    element: 'div',
                    className:
                      'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black rounded-full w-16 h-16 text-center',
                    child: [
                      El({
                        element: 'ion-icon',
                        name: 'location',
                        className:
                          'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white z-10 text-4xl',
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: 'div',
                child: [
                  El({
                    element: 'p',
                    child: 'Home',
                    className: 'font-bold text-md',
                  }),
                  El({
                    element: 'p',
                    child: '61480 Sunbrook',
                    className: 'text-gray-600',
                  }),
                ],
              }),
            ],
          }),

          El({
            element: 'ion-icon',
            name: 'pencil',
            className: 'text-3xl',
          }),
        ],
      }),
      El({
        element: 'h2',
        child: 'Order List',
        className: 'text-xl font-bold text-left p-4 mb-3',
      }),
      El({
        element: 'div',
        className:
          'flex items-center justify-between gap-4 p-4 shadow-md rounded',
        child: [
          El({
            element: 'img',
            src: './img/pics/shoe1.JPG',
            className: 'w-32',
          }),
          El({
            element: 'div',
            className: 'w-full',
            child: [
              El({
                element: 'h3',
                child: 'Air Jordan 3 Retro',
                className: 'font-bold mb-2',
              }),
              El({
                element: 'div',
                className: 'flex gap-3',
                child: [
                  El({
                    element: 'div',
                    className: 'bg-black rounded-full w-4 h-4 mb-4',
                  }),
                  El({
                    element: 'span',
                    child: 'Black',
                    className: 'text-xs text-gray-600',
                  }),
                  El({
                    element: 'span',
                    child: '|',
                    className: 'text-xs text-gray-600',
                  }),
                  El({
                    element: 'span',
                    child: 'size = 42',
                    className: 'text-xs text-gray-600',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex justify-between',
                child: [
                  El({
                    element: 'span',
                    child: '$105.00',
                    className: 'font-bold',
                  }),
                  El({
                    element: 'div',
                    className: 'relative bg-slate-200 rounded-full w-8 h-8 ',
                    child: [
                      El({
                        element: 'span',
                        child: '1',
                        className:
                          'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-bold',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className:
          'flex items-center justify-between gap-4 p-4 shadow-md rounded',
        child: [
          El({
            element: 'img',
            src: './img/pics/shoe1.JPG',
            className: 'w-32',
          }),
          El({
            element: 'div',
            className: 'w-full',
            child: [
              El({
                element: 'h3',
                child: 'Running Sportwear',
                className: 'font-bold mb-2',
              }),
              El({
                element: 'div',
                className: 'flex gap-3',
                child: [
                  El({
                    element: 'div',
                    className: 'bg-slate-100 rounded-full w-4 h-4 mb-4',
                  }),
                  El({
                    element: 'span',
                    child: 'silver',
                    className: 'text-xs text-gray-600',
                  }),
                  El({
                    element: 'span',
                    child: '|',
                    className: 'text-xs text-gray-600',
                  }),
                  El({
                    element: 'span',
                    child: 'size = 41',
                    className: 'text-xs text-gray-600',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex justify-between',
                child: [
                  El({
                    element: 'span',
                    child: '$240.00',
                    className: 'font-bold',
                  }),
                  El({
                    element: 'div',
                    className: 'relative bg-slate-200 rounded-full w-8 h-8 ',
                    child: [
                      El({
                        element: 'span',
                        child: '2',
                        className:
                          'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-bold',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className:
          'flex items-center justify-between gap-4 p-4 shadow-md rounded',
        child: [
          El({
            element: 'img',
            src: './img/pics/shoe1.JPG',
            className: 'w-32',
          }),
          El({
            element: 'div',
            className: 'w-full',
            child: [
              El({
                element: 'h3',
                child: 'New Balance 996',
                className: 'font-bold mb-2',
              }),
              El({
                element: 'div',
                className: 'flex gap-3',
                child: [
                  El({
                    element: 'div',
                    className: 'bg-zinc-600 rounded-full w-4 h-4 mb-4',
                  }),
                  El({
                    element: 'span',
                    child: 'Brown Grey',
                    className: 'text-xs text-gray-600',
                  }),
                  El({
                    element: 'span',
                    child: '|',
                    className: 'text-xs text-gray-600',
                  }),
                  El({
                    element: 'span',
                    child: 'size = 42',
                    className: 'text-xs text-gray-600',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex justify-between',
                child: [
                  El({
                    element: 'span',
                    child: '$125.00',
                    className: 'font-bold',
                  }),
                  El({
                    element: 'div',
                    className: 'relative bg-slate-200 rounded-full w-8 h-8 ',
                    child: [
                      El({
                        element: 'span',
                        child: '1',
                        className:
                          'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-bold',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'h2',
        child: 'Choose Shipping',
        className: 'text-xl font-bold text-left p-4 mb-3',
      }),
      El({
        element: 'div',
        className:
          'flex items-center justify-between text-left p-4 shadow-md rounded',
        child: [
          El({
            element: 'div',
            className: 'flex gap-3',
            child: [
              El({
                element: 'ion-icon',
                name: 'car',
                className: 'text-3xl',
              }),
              El({
                element: 'p',
                child: 'Choose Shipping Type',
                className: 'font-bold',
              }),
            ],
          }),

          El({
            element: 'ion-icon',
            name: 'chevron-forward',
            className: 'text-3xl',
          }),
        ],
      }),
      El({
        element: 'h2',
        child: 'Promo Code',
        className: 'text-xl font-bold text-left p-4 mb-3',
      }),
      El({
        element: 'div',
        className: 'flex justify-between gap-4',
        child: [
          El({
            element: 'input',
            placeholder: 'Enter Promo Code',
            className: 'bg-slate-50 p-2 rounded outline-none w-full',
          }),
          El({
            element: 'ion-icon',
            name: 'add-circle',
            className: 'text-5xl',
          }),
          // El({
          //   element: 'div',
          //   className: 'relative bg-black rounded-full w-16 h-16 text-center',
          // }),
          // El({
          //   element: 'ion-icon',
          //   name: 'add',
          //   className:
          //     'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white',
          // }),
        ],
      }),
      El({
        element: 'div',
        className: 'p-4 shadow-md rounded mb-10',
        child: [
          El({
            element: 'div',
            className: 'flex justify-between p-4',
            child: [
              El({
                element: 'p',
                child: 'Amount',
                className: 'text-gray-600 text-lg font-normal',
              }),
              El({
                element: 'span',
                child: '$585.00',
                className: 'text-gray-700 font-bold text-lg',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex justify-between p-4',
            child: [
              El({
                element: 'p',
                child: 'Shipping',
                className: 'text-gray-600 text-lg font-normal',
              }),
              El({
                element: 'span',
                child: '-',
                className: 'text-gray-700 font-bold text-lg',
              }),
            ],
          }),
          El({
            element: 'hr',
          }),
          El({
            element: 'div',
            className: 'flex justify-between p-4',
            child: [
              El({
                element: 'p',
                child: 'Total',
                className: 'text-gray-600 text-lg font-normal',
              }),
              El({
                element: 'span',
                child: '-',
                className: 'text-gray-700 font-bold text-lg',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: ' p-4',
        child: [
          El({
            element: 'button',
            className: ' bg-black rounded-full w-full py-6',
            child: [
              El({
                element: 'div',
                className: 'flex items-center text-white justify-center',
                child: [
                  El({
                    element: 'p',
                    className: 'self-center text-xl font-bold',
                    child: 'Continue to Payment',
                  }),
                  El({
                    element: 'ion-icon',
                    name: 'arrow-redo',
                    className: 'text-xl font-bold',
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
export default checkout;
