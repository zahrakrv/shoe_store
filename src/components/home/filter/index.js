import El from '@/library/index.js';

const brands = [
  { name: 'All' },
  { name: 'Nike' },
  { name: 'Adidas' },
  { name: 'Puma' },
  { name: 'Asics' },
  { name: 'Reebok' },
  { name: 'New Balance' },
  { name: 'Converse' },
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
      } else {
        button.style.backgroundColor = 'white';
        button.style.color = '#343A40';
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
          className: 'flex gap-2 justify-around items-center py-5 w-max',
          child: buttons,
        }),
      }),
    ],
  });
};

export default filterBrands;
