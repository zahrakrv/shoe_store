import El from '@/library/index.js';
import publicAxios from '@/instance/axiosPublic';
import shoeCart from '@/components/cartFunc/shoe cart/index';
import footer from '@/components/home/footer/index.js';

const myOrders = (id) => {
  const activeContainer = El({
    element: 'div',
  });
  const completedContainer = El({
    element: 'div',
  });

  publicAxios.get(`/orders?userId=${id}`).then((res) => {
    res.data.forEach((element) => {
      if (element.isActive) {
        activeContainer.append(shoeCart(element));
      } else {
        completedContainer.append(shoeCart(element));
      }
    });
  });
  return El({
    element: 'div',
    className: 'bg-gray-50 w-full h-screen',
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
                    src: 'http://localhost:5180/assets/images/logo.png',
                    className: 'w-4 h-4',
                  }),
                  El({
                    element: 'h1',
                    child: 'My Orders',
                    className: 'text-2xl font-semibold',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex items-center gap-x-4',
                child: [
                  El({
                    element: 'button',
                    className: 'flex',
                    child: El({
                      element: 'ion-icon',
                      name: 'search-outline',
                      className: 'text-3xl align-text-top',
                    }),
                  }),
                  El({
                    element: 'button',
                    className: 'flex',
                    child: El({
                      element: 'ion-icon',
                      name: 'ellipsis-horizontal-circle',
                      className: 'text-2xl',
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'mb-4 border-b border-gray-200',
        child: El({
          element: 'ul',
          className:
            'w-full flex justify-evenly -mb-px text-sm font-medium text-center',
          id: 'myTab',
          dataTabsToggle: '#myTabContent',
          role: 'tablist',
          child: [
            El({
              element: 'li',
              className: '',
              role: 'presentation',
              child: El({
                element: 'button',
                onclick: () => {
                  document.getElementById('active').classList.remove('hidden');
                  document.getElementById('completed').classList.add('hidden');
                  document
                    .getElementById('active-tab')
                    .classList.add('border-black');
                  document
                    .getElementById('completed-tab')
                    .classList.remove('border-black');
                },
                className:
                  'inline-block p-4 border-b-2 border-black rounded-t-lg',
                id: 'active-tab',
                dataTabsTarget: '#active',
                type: 'button',
                role: 'tab',
                ariaControls: 'active',
                ariaSelected: 'false',
                child: 'Active',
              }),
            }),
            El({
              element: 'li',
              className: '',
              role: 'presentation',
              child: El({
                element: 'button',
                onclick: () => {
                  document.getElementById('active').classList.add('hidden');
                  document
                    .getElementById('completed')
                    .classList.remove('hidden');
                  document
                    .getElementById('completed-tab')
                    .classList.add('border-black');
                  document
                    .getElementById('active-tab')
                    .classList.remove('border-black');
                },
                className: 'inline-block p-4 border-b-2 rounded-t-lg',
                id: 'completed-tab',
                dataTabsTarget: '#completed',
                type: 'button',
                role: 'tab',
                ariaControls: 'completed',
                ariaSelected: 'false',
                child: 'Completed',
              }),
            }),
          ],
        }),
      }),
      El({
        element: 'div',
        id: 'myTabContent',
        child: [
          El({
            element: 'div',
            className: 'p-4 rounded-lg bg-gray-50',
            id: 'active',
            role: 'tabpanel',
            ariaLabelledby: 'active-tab',
            child: activeContainer,
          }),
          El({
            element: 'div',
            className: 'hidden p-4 rounded-lg bg-gray-50',
            id: 'completed',
            role: 'tabpanel',
            ariaLabelledby: 'completed-tab',
            child: completedContainer,
          }),
        ],
      }),
      footer(),
    ],
  });
};

export default myOrders;
