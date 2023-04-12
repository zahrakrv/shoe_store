import El from '@/library/index.js';
import firstPage from '@/components/firstPage/index.js';
import { slider } from '@/components/slider/buttonSet/index.js';
import { settingSwipper } from '@/components/slider/swiper/index';

import welcomePage from '@/components/welcomePage/index.js';
const onBoarding = () => {
  settingSwipper();
  setTimeout(() => {
    settingSwipper();
    const firstload = document.getElementById('first-page');
    firstload.innerHTML = '';
    firstload.appendChild(welcomePage());
    setTimeout(() => {
      settingSwipper();
      firstload.innerHTML = '';
      firstload.append(slider());
      settingSwipper();
    }, 2000);
  }, 1000);
  return El({
    element: 'div',
    className: 'h-full',
    id: 'start-boarding',
    child: [firstPage()],
  });
};
settingSwipper();
export default onBoarding;
