import El from '@/library/index';
import routerFunction from '@/router/index.js';

const shoes = (obj) => {
  // const products = [
  //   {
  //     imgSrc: '/assets/images/shoe.png',
  //     title: 'K-Swiss ista Train...',
  //     price: '$ 85.00',
  //   },
  //   {
  //     imgSrc: '/assets/images/shoe2.png',
  //     title: 'K-Swiss ista Train...',
  //     price: '$ 85.00',
  //   },
  //   {
  //     imgSrc: '/assets/images/shoe.png',
  //     title: 'K-Swiss ista Train...',
  //     price: '$ 85.00',
  //   },
  //   {
  //     imgSrc: '/assets/images/shoe2.png',
  //     title: 'K-Swiss ista Train...',
  //     price: '$ 85.00',
  //   },
  //   {
  //     imgSrc: '/assets/images/shoe.png',
  //     title: 'K-Swiss ista Train...',
  //     price: '$ 85.00',
  //   },
  //   {
  //     imgSrc: '/assets/images/shoe2.png',
  //     title: 'K-Swiss ista Train...',
  //     price: '$ 85.00',
  //   },
  // ];

  return El({
    element: 'div',
    id: obj.id,
    className: 'flex flex-wrap justify-around items-center pl-2',
    onclick: (e) => {
      routerFunction().navigate(`/${e.currentTarget.id}`);
    },
    child: El({
      element: 'div',

      className: 'mb-6',
      child: [
        El({
          element: 'div',
          className:
            'w-40 h-40 bg-gray-100 rounded-3xl flex justify-center items-center mb-3',
          child: El({
            element: 'img',
            className: 'w-36 h-36',
            src: obj.images,
          }),
        }),
        El({
          element: 'p',
          child: obj.title,
          className: 'font-bold text-lg mb-1',
        }),
        El({
          element: 'span',
          child: `$ ${obj.price}`,
          className: 'font-medium text-base',
        }),
      ],
    }),
  });
};

export default shoes;
