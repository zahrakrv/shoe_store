import El from '@/library/index.js';
import counter from '@/components/cartFunc/counter/index';

const shoeCart = () => {
  return El({
    element: 'div',
    child: El({
      element: 'div',
      className: 'bg-white w-11/12 flex p-4 rounded-3xl mx-auto mb-4',
      child: [
        El({
          element: 'div',
          child: El({
            element: 'div',
            className:
              'w-24 h-24 bg-gray-100 rounded-3xl flex justify-center items-center',
            child: El({
              element: 'img',
              src: './img/pics/shoe-sample.png',
              className: 'p-1',
            }),
          }),
        }),
        El({
          element: 'div',
          className: 'flex flex-col w-full gap-y-3',
          child: [
            El({
              element: 'div',
              className: 'flex items-center w-full justify-around pl-1',
              child: [
                El({
                  element: 'h2',
                  child: 'Air Jordan 3 Retro',
                }),
                El({
                  element: 'button',
                  className: 'flex items-center',
                  child: El({
                    element: 'ion-icon',
                    name: 'trash-outline',
                  }),
                }),
              ],
            }),
            El({
              element: 'div',
              className: 'flex items-center gap-x-2 pl-4',
              child: [
                El({
                  element: 'div',
                  child: '',
                  className: 'w-4 h-4 rounded-full bg-black',
                }),
                El({
                  element: 'span',
                  child: 'Black',
                  className: 'text-xs text-gray-500',
                }),
                El({
                  element: 'span',
                  child: '|',
                  className: 'text-xs text-gray-500',
                }),
                El({
                  element: 'span',
                  child: 'Size = 42',
                  className: 'text-xs text-gray-500',
                }),
              ],
            }),
            El({
              element: 'div',
              className: 'flex justify-around items-center gap-x-10 pl-4',
              child: [
                El({
                  element: 'span',
                  child: '$105.00',
                }),
                counter(),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};

export default shoeCart;
