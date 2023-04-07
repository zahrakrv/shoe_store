import El from '@/library/index.js';

const welcomePage = () => {
  return El({
    element: 'div',
    className: 'relative h-screen',
    child: [
      El({
        element: 'img',
        src: './img/pics/WallpaperDog.png',
        className: 'brightness-50 z-10 h-screen w-full',
      }),
      //   El({
      //     element: 'img',
      //     src: './img/pics/Rectangle.png',
      //     className: 'z-10 h-full w-full',
      //   }),
      El({
        element: 'p',
        child: '👋 Welcome to ',
        className: 'text-3xl absolute text-white z-20 left-6 bottom-40',
      }),
      El({
        element: 'h2',
        child: 'Shoea',
        className:
          'text-5xl absolute text-white font-bold bottom-24 left-6 text-lg',
      }),
      El({
        element: 'p',
        child:
          'The best sneakers & shoes e-commerse app of the centuryfor your fashion needs',
        className:
          'absolute text-left text-sm text-white bottom-10 left-6 w-full',
      }),
    ],
  });
};

export default welcomePage;

// child: El({
//   element: 'img',
//   src: './img/pics/welcome.png',
//   className: 'w-full h-screen ',
// }),
