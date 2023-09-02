import El from '@/library/index.js';
import shoes from '@/components/home/shoes/index.js';
import publicAxios from '@/instance/axiosPublic.js';
const brands = [
  { name: 'All' },
  { name: 'nike' },
  { name: 'adidas' },
  { name: 'puma' },
  { name: 'asics' },
  { name: 'reebok' },
  { name: 'new Balance' },
  { name: 'converse' },
];

const filterBrands = () => {
  const buttons = brands.map((brand) =>
    El({
      element: 'button',
      child: brand.name,
      className:
        'flex items-center text-[#343A40] gap-1 rounded-full border-[#343A40] border-2 border-solid px-4 py-1',
    })
  );

  const handleClick = (clickedIndex) => {
    buttons.forEach((button, index) => {
      if (index === clickedIndex) {
        button.style.backgroundColor = '#343A40';
        button.style.color = 'white';
        button.dataset.active = 'true';
      } else {
        button.style.backgroundColor = 'white';
        button.style.color = '#343A40';
        button.dataset.active = 'false';
      }
    });
  };

  handleClick(0); // Select the first button by default

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      handleClick(index);
    });
  });

  return El({
    element: 'div',
    className: 'pb-6',
    child: [
      El({
        element: 'div',
        className: 'overflow-scroll scrollbar-hide pl-6',
        child: El({
          element: 'div',
          onclick: (e) => {
            Array.from(e.currentTarget.childNodes).forEach((item, index) => {
              if (index > 0) {
                if (item.dataset.active === 'true') {
                  document.getElementById('home-filter').innerHTML = '';
                  publicAxios
                    .get(`/products?brand=${item.textContent}`)
                    .then((res) => {
                      res.data.forEach((item) => {
                        document
                          .getElementById('home-filter')
                          .append(shoes(item));
                      });
                    });
                }
              } else {
                if (item.dataset.active === 'true') {
                  document.getElementById('home-filter').innerHTML = '';
                  publicAxios.get('/products').then((res) => {
                    res.data.forEach((item) => {
                      document
                        .getElementById('home-filter')
                        .append(shoes(item));
                    });
                  });
                }
              }
            });
          },
          className: 'flex gap-2 justify-around items-center py-5 w-max',
          child: buttons,
        }),
      }),
    ],
  });
};

export default filterBrands;
