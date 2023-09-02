import App from './src/App.js';
import './src/styles/style.css';
// import 'swiper/css/bundle';

import routerFunction from './src/router/index';
const root = document.getElementById('app');
root.appendChild(App());
routerFunction();
// setTimeout(() => {
//   routerFunction().navigate('/welcomePage');
// }, 2000);
window.addEventListener('popstate', routerFunction);
