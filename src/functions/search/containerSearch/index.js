import routerFunction from '@/router/index';
import El from '@/library/index.js';

const filterDynamicHome = () => {
  return El({
    element: 'div',
    className: 'flex flex-col p-2',
    child: [
      El({
        element: 'ion-icon',
        name: 'arrow-back',
        onclick: () => {
          routerFunction().navigate('/home');
        },
      }),
      El({
        element: 'div',
        id: 'searchContainer',
        className: 'flex flex-wrap justify-around items-center p-4 mb-2',
      }),
    ],
  });
};
export default filterDynamicHome;
