import { swiperFunc } from '@/components/slider/swiper/index';
// import Swiper from 'swiper/bundle';
// import { settingSwipper } from '@/components/slider/swiper/index.js';

import El from '@/library/index';

import routerFunc from '@/router/index.js';

export function slider() {
  //   settingSwipper();

  return El({
    element: 'div',
    id: 'slider',
    className:
      'h-full w-full bg-white transition duration-500 ease-in-out transform  ',
    child: [
      El({
        element: 'div',
        className: 'swiper ',
        child: swiperFunc(),
      }),
      El({
        element: 'div',
        className: ' w-full text-xl text-black text-center p-2',
        dataset: { change: 'description' },
        child: 'We provide high quality products just for you',
      }),
      El({
        element: 'div',
        className: 'swiper-pagination ',
      }),
      El({
        element: 'div',
        className: 'w-full p-2 px-5',
        child: El({
          element: 'button',
          className: 'text-white w-full   bg-black p-2 rounded-3xl',
          dataset: { change: 'button' },
          child: 'Next',
          onclick: function name() {
            const swiper = document.querySelector('.swiper').swiper;
            // const slider = document.querySelector('#slider');
            // const datachange = slider.querySelectorAll('[data-change]');
            // const [description, button] = [...datachange];
            // if (swiper.activeIndex === 0) {
            //   button.innerHTML = 'Next';
            //   description.innerHTML =
            //     'We provide high quality products just for you';
            // }
            // if (swiper.activeIndex === 1) {
            //   button.innerHTML = 'Next';
            //   description.innerHTML =
            //     'Your satisfaction is our number one periority';
            // }
            // if (swiper.activeIndex === 2) {
            //   description.innerHTML =
            //     'Let’s fulfill your fashion needs with shoearight now!';
            //   button.innerHTML = 'Get Started';
            // }
            swiper.slideNext();
          },
          eventListener: [
            {
              event: 'click',
              callback: changeRoute,
            },
          ],
        }),
      }),
    ],
  });
}

function changeRoute(e) {
  const swiper = document.querySelector('.swiper').swiper;
  if (swiper.activeIndex === 2) {
    routerFunc().navigate('/auth');
  }
}
