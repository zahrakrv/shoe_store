import El from '@/library/index.js';
import routerFunction from '@/router/index.js';

const cardContainer = (array, name) => {
  return El({
    element: 'div',
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
                onclick: () => {
                  routerFunction().navigate('/home');
                },
              }),
              El({
                element: 'h1',
                child: name,
                className: 'text-2xl font-bold',
              }),
            ],
          }),
        ],
      }),
      ///
      // El({
      //   element: 'div',
      //   className: 'p-8',
      //   child: [
      //     El({
      //       elemen: 'ion-icon',
      //       name: 'arrow-back',
      //     }),
      //     El({
      //       element: 'span',
      //       child: name,
      //       onclick: () => {
      //         routerFunction().navigate('/home');
      //       },
      //     }),
      //   ],
      // }),
      El({
        element: 'div',
        child: array,
        className: 'flex flex-wrap justify-around items-center pl-2',
      }),
    ],
  });
};
export default cardContainer;
