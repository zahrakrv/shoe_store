import App from './src/App.js';
import './src/styles/style.css';
import { settingSwipper } from './src/components/slider/swiper/index';
const root = document.getElementById('app');
root.appendChild(App());
settingSwipper();
