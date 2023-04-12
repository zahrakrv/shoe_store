import El from '@/library/index.js';

const counter = () => {
  return El({
    element: 'div',
    child: El({
      element: 'div',
      className: 'flex flex-row rounded-full relative bg-transparent',
      child: [
        El({
          element: 'button',
          dataAction: 'decrement',
          className:
            ' bg-gray-300 w-7 h-7 text-gray-600 rounded-l-xl cursor-pointer outline-none -mr-px',
          child: El({
            element: 'span',
            child: '-',
          }),
        }),
        El({
          element: 'span',
          child: '0',
          className:
            'w-7 h-7 bg-gray-300 text-gray-700 text-sm flex justify-center items-center',
        }),
        El({
          element: 'button',
          dataAction: 'increment',
          className:
            'bg-gray-300 text-gray-600 rounded-r-xl cursor-pointer w-7 h-7 -ml-px',
          child: El({
            element: 'span',
            child: '+',
          }),
        }),
      ],
    }),
  });
};

export default counter;
