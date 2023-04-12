import El from '@/library/index.js';
const shippingAddress = () => {
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
                child: 'Shipping Address',
                className: 'text-2xl font-bold',
              }),
            ],
          }),
        ],
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
                    element: 'div',
                    className: 'flex gap-2',
                    child: [
                      El({
                        element: 'p',
                        child: 'Home',
                        className: 'font-bold text-md',
                      }),
                      El({
                        element: 'div',
                        child: 'Default',
                        className:
                          'text-xs bg-slate-200 self-center p-1 rounded',
                      }),
                    ],
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
            element: 'div',

            child: [
              El({
                element: 'input',
                type: 'radio',
                name: 'address',
                // className: 'after:bg-black',
              }),
              El({
                element: 'span',
                className: '',
              }),
            ],
          }),
        ],
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
                    element: 'div',
                    className: 'flex gap-2',
                    child: [
                      El({
                        element: 'p',
                        child: 'Office',
                        className: 'font-bold text-md',
                      }),
                    ],
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
            element: 'div',

            child: [
              El({
                element: 'input',
                type: 'radio',
                name: 'address',

                // className: 'after:bg-black',
              }),
              El({
                element: 'span',
                className: '',
              }),
            ],
          }),
        ],
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
                    element: 'div',
                    className: 'flex gap-2',
                    child: [
                      El({
                        element: 'p',
                        child: 'Apartment',
                        className: 'font-bold text-md',
                      }),
                    ],
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
            element: 'div',

            child: [
              El({
                element: 'input',
                type: 'radio',
                name: 'address',

                // className: 'after:bg-black',
              }),
              El({
                element: 'span',
                className: '',
              }),
            ],
          }),
        ],
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
                    element: 'div',
                    className: 'flex gap-2',
                    child: [
                      El({
                        element: 'p',
                        child: 'Parent,s House',
                        className: 'font-bold text-md',
                      }),
                    ],
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
            element: 'div',

            child: [
              El({
                element: 'input',
                type: 'radio',
                name: 'address',

                // className: 'after:bg-black',
              }),
              El({
                element: 'span',
                className: '',
              }),
            ],
          }),
        ],
      }),
      /// ////////button gray//////////////
      El({
        element: 'div',
        className: ' p-4',
        child: [
          El({
            element: 'button',
            className: ' bg-slate-200 rounded-full w-full py-6',
            child: [
              El({
                element: 'div',
                className: 'flex items-center text-slate-600 justify-center',
                child: [
                  El({
                    element: 'p',
                    className: 'self-center text-xl font-bold',
                    child: 'Add New Address',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      /// //////button black ///////
      El({
        element: 'div',
        className: 'p-4 ',
        child: [
          El({
            element: 'button',
            className: 'bg-black rounded-full w-full py-6 ',
            child: [
              El({
                element: 'div',
                className: 'flex items-center text-white justify-center',
                child: [
                  El({
                    element: 'p',
                    className: 'self-center text-xl font-bold',
                    child: 'Apply',
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
export default shippingAddress;
