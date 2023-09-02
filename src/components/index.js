import routerFunction from '@/router/index.js';
import El from '@/library/index';
import Swiper from 'swiper/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

const slides = [
  {
    text: 'We provide high quality products just for you',
    src: './img/pics/slide1.png',
  },
  {
    text: 'Your satisfaction is our number one priority',
    src: './img/pics/slide2.png',
  },
  {
    text: 'Let’s fulfill your fashion needs with shoea right now!',
    src: './img/pics/slide3.png',
  },
];

const mySlides = (slide) => {
  return El({
    element: 'div',
    className: 'swiper-slide w-full flex flex-col',
    child: [
      El({
        element: 'div',
        className: 'w-full overflow-hidden',
        child: [
          El({
            element: 'img',
            className: 'w-full h-full',
            src: slide.src,
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'w-full flex items-center justify-center',
        child: [
          El({
            element: 'span',
            className:
              'w-full px-4 py-4 text-center text-black text-xl font-semibold mx-1',
            innerText: slide.text,
          }),
        ],
      }),
    ],
  });
};

// const configSwiper = () => {
//   new Swiper('.swiper', {
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     allowTouchMove: false,
//   });
// };

function configSwiper() {
  const swiper = new Swiper('.swiper', {
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      pagination: 'true',
      type: 'bullets',
      effect: 'fade',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      navigation: 'true',
    },
  });
  console.log(swiper);
}
const slider = () => {
  setTimeout(configSwiper, 0);
  return El({
    element: 'div',
    id: 'first-slider',
    className:
      'w-full h-full pb-4 flex flex-col items-center justify-end tall:justify-between transition ease-linear duration-500 transform',
    child: [
      El({
        element: 'div',
        className: 'w-full swiper',
        child: [
          El({
            element: 'div',
            className: 'swiper-wrapper mb-2',
            child: [
              ...slides.map((item) => {
                return mySlides(item);
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'swiper-pagination',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'w-full text-center px-4',
        child: [
          El({
            element: 'button',
            className: 'w-full bg-black p-4 text-white rounded-full',
            child: 'Next',
            eventListener: [
              {
                event: 'click',
                callback: (e) => {
                  const swiper = document.querySelector('.swiper').swiper;
                  swiper.slideNext();
                  if (swiper.activeIndex === 2) {
                    e.target.innerText = 'Get Started';
                  }
                  if (e.target.innerText === 'Get Started') {
                    routerFunction().navigate('./login');
                  }
                  // else null;
                },
              },
            ],
          }),
        ],
      }),
    ],
  });
};

export default slider;
// function changeRoute() {
//   routerFunction().navigate('./login');
// }
