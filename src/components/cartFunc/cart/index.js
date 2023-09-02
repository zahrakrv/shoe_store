import shoeCart from '@/components/cartFunc/shoe Cart/index';
import footer from '@/components/home/footer/index';
import El from '@/library/index.js';
import trashBtn from '../shoeInfo/trashBtn';
import counter from '@/components/cartFunc/counter/index';
import publicAxios from '@/instance/axiosPublic';
import routerFunction from '@/router';

const myCart = (id) => {
  const container = El({
    element: 'div',
  });
  publicAxios.get(`/orders?userId=${id}`).then((res) => {
    res.data.forEach((element) => {
      container.append(
        shoeCart(
          element,
          trashBtn(),
          counter({ totalPriceId: 'totalPriceCart', price: 253, firstNum: 1 })
        )
      );
    });
  });
  const cart = El({
    element: 'div',
    className: 'bg-[#F3F3F3] h-screen px-5 py-10',
    child: [
      // drawer
      El({
        element: 'div',
        id: 'drawer',
        onclick: (e) => {
          console.log(e.currentTarget.childNodes[0].id);
          document
            .getElementById('cardsContainer')
            .childNodes.forEach((item) => {
              if (item.id === e.currentTarget.childNodes[0].id) {
                publicAxios.get(`/orders/${item.id}`).then((res) => {
                  console.log(res.data);
                  item.querySelector('#quantityNumber').textContent =
                    res.data.quantity;
                });
              }
            });
        },
        child: [
          El({
            element: 'div',
            className: 'font-bold text-2xl text-center py-5',
            child: 'Remove From Cart?',
          }),
          El({
            element: 'div',
            className: 'border-t border-b py-10 grow',
            id: 'drawerCard',
          }),
          El({ element: 'div' }),
        ],
        className:
          'flex flex-col justify-center justify-between w-full h-[0px] py-5 px-6 duration-300 absolute bottom-0 left-0 z-30 bg-white rounded-t-[70px] hidden',
      }),
      /// //
      El({
        element: 'div',
        id: 'background',
        onclick: () => {
          document.getElementById('background').classList.add('hidden');
          document.getElementById('drawer').classList.remove('h-[50vh]');
          document.getElementById('drawer').classList.add('h-[0px]');
          setTimeout(() => {
            document.getElementById('drawerCard').innerHTML = '';
            document.getElementById('drawer').classList.add('hidden');
          }, 100);
        },
        className:
          'h-screen w-screen bg-black bg-opacity-20 absolute top-0 left-0 z-20 hidden',
      }),
    ],
  });
  console.log(cart);
  return El({
    element: 'div',
    className: 'bg-gray-100 w-full h-screen',
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
                    src: 'http://localhost:5173/img/pics/shoe-sample.png',
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
      container,
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
                id: 'totalPriceCart',
                // child: container.childNodes.reduce((acc, item) => {
                //   return item + acc;
                // }),
                child: '$508.00',
                className: 'font-bold text-lg',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'w-full flex justify-center items-center',
            child: El({
              element: 'button',
              onclick: () => {
                routerFunction().navigate('/checkout');
              },
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

export default myCart;
