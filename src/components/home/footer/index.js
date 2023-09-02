import El from '@/library/index.js';
import routerFunction from '@/router';

const footer = () => {
  const icons = [
    { name: 'home-outline', text: 'Home', route: '/home' },
    { name: 'bag-outline', text: 'Cart', route: '/cart' },
    { name: 'cart-outline', text: 'Orders', route: '/myorders' },
    { name: 'wallet-outline', text: 'Wallet', route: '/checkout' },
    { name: 'person-outline', text: 'Profile' },
  ];

  const footerItems = icons.map((icon) => {
    return El({
      element: 'div',
      className: 'flex flex-col',
      child: [
        El({
          element: 'button',
          onclick: () => {
            routerFunction().navigate(`${icon.route}`);
          },
          child: El({
            element: 'ion-icon',
            className: 'text-3xl',
            name: icon.name,
          }),
        }),
        El({
          element: 'span',
          className: 'text-xs',
          child: icon.text,
        }),
      ],
    });
  });

  return El({
    element: 'div',
    className: 'flex gap-x-10 justify-center items-center mb-4 mt-8',
    child: footerItems,
  });
};

export default footer;
