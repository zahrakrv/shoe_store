import El from '@/library/index.js';
import routerFunction from '@/router/index.js';
import filterBrands from '@/components/home/filter/index';
import wishlistShoe from '@/components/wishList/wishListShoe/index';
import publicAxios from '@/instance/axiosPublic';

const wishlist = (array) => {
  const container = El({
    element: 'div',
  });
  array.forEach((element) => {
    publicAxios.get(`/products/${element}`).then((res) => {
      container.append(wishlistShoe(res.data));
    });
  });
  return El({
    element: 'div',
    child: [
      El({
        element: 'div',
        className: 'flex justify-between items-center p-6',
        child: [
          El({
            element: 'div',
            className: 'flex justify-center items-center gap-x-4',
            child: [
              El({
                element: 'button',
                child: El({
                  element: 'ion-icon',
                  name: 'arrow-back',
                  className: 'text-2xl align-text-top',
                  onclick: () => {
                    routerFunction().navigate('/home');
                  },
                }),
              }),
              El({
                element: 'h1',
                child: 'My Wishlist',
                className: 'text-2xl font-bold',
              }),
            ],
          }),
          El({
            element: 'div',
            child: El({
              element: 'button',
              child: El({
                element: 'ion-icon',
                name: 'search-outline',
                className: 'text-3xl align-text-top',
              }),
            }),
          }),
        ],
      }),
      filterBrands(),
      container,
    ],
  });
};

export default wishlist;
