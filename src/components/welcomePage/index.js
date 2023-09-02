import El from '@/library/index.js';
import routerFunction from '@/router/index';

const welcomePage = () => {
  return El({
    element: 'div',
    className: 'relative h-screen',
    onclick: changeToSlider,
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
        className:
          'text-4xl absolute text-white z-20 left-6 bottom-40 mb-[5rem]',
      }),
      El({
        element: 'h2',
        child: 'Shoea',
        className:
          'text-7xl absolute text-white font-bold bottom-24 left-6 text-lg mb-[3rem]',
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

function changeToSlider() {
  routerFunction().navigate('./slider');
}
export default welcomePage;

// child: El({
//   element: 'img',
//   src: './img/pics/welcome.png',
//   className: 'w-full h-screen ',
// }),
