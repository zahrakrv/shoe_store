import firstPage from '@/components/firstPage/index.js';
// import { settingSwipper } from '@/components/slider/swiper';
import slider from '@/components/index.js';
import welcomePage from '@/components/welcomePage/index.js';
import login from '@/components/login/index.js';
import homePage from '@/components/home/index.js';
import publicAxios from '@/instance/axiosPublic';
import shoes from '@/components/home/shoes/index.js';
import cardContainer from '@/components/home/cardContainer/index.js';
import shoeInfo from '@/components/cartFunc/shoeInfo/index.js';
import filterDynamicHome from '@/functions/search/containerSearch/index';
// import showNotFoundPage from '@/functions/search/notFoundPage/index';
import myCart from '@/components/cartFunc/cart/index';
import checkout from '@/components/checkout/checkout1/index';
import shippingAddress from '@/components/checkout/checkout2/index';
import chooseShipping from '@/components/checkout/checkout3/index';
import payment from '@/components/checkout/checkout4/index';
import confirmation from '@/components/checkout/checkout5/index';
import myOrders from '@/components/myOrder/index.js';

import Navigo from 'navigo';
// import { data } from 'autoprefixer';
const router = new Navigo('/');
function routerFunction() {
  const routeDiv = document.getElementById('route');
  router
    .on('/', function () {
      routeDiv.append(firstPage());
    })
    .on('/welcomePage', function () {
      routeDiv.innerHTML = '';
      routeDiv.append(welcomePage());
    })
    .on('./slider', function () {
      routeDiv.innerHTML = '';
      routeDiv.append(slider());
    })
    .on('./login', function () {
      routeDiv.innerHTML = '';
      routeDiv.append(login());
    })
    .on('/home', function () {
      routeDiv.innerHTML = '';
      routeDiv.append(homePage());
    })
    .on('/cart', () => {
      routeDiv.innerHTML = '';
      routeDiv.append(myCart(1));
    })
    .on('/checkout', () => {
      routeDiv.innerHTML = '';
      routeDiv.append(checkout());
    })
    .on('/address', () => {
      routeDiv.innerHTML = '';
      routeDiv.append(shippingAddress());
    })
    .on('/chooseShipping', () => {
      routeDiv.innerHTML = '';
      routeDiv.append(chooseShipping());
    })
    .on('/payment', () => {
      routeDiv.innerHTML = '';
      routeDiv.append(payment());
    })
    .on('/confirmation', () => {
      routeDiv.innerHTML = '';
      routeDiv.append(confirmation());
    })
    .on('/myorders', () => {
      routeDiv.innerHTML = '';
      routeDiv.append(myOrders());
    })
    .on('/:id', (params) => {
      routeDiv.innerHTML = '';
      publicAxios.get(`/products?id=${params.data.id}`).then((res) => {
        // console.log(res.data);
        routeDiv.append(shoeInfo(res.data[0]));
      });
    })

    .on('/search/:searchValue', ({ data }) => {
      console.log(data.searchValue);
      routeDiv.innerHTML = '';
      routeDiv.append(filterDynamicHome());
      publicAxios.get(`/products?brand=${data.searchValue}`).then((res) => {
        const carts = res.data;
        console.log(res.data);
        console.log(carts);
        carts.forEach((cart) => {
          document.getElementById('searchContainer').append(shoes(cart));
        });
      });
    })
    // .on('/notfound', () => {
    //   showNotFoundPage();
    // })

    .on('/products/:name', (params) => {
      routeDiv.innerHTML = '';
      // console.log(params);
      publicAxios.get(`/products?brand=${params.data.name}`).then((res) => {
        routeDiv.innerHTML = '';
        console.log(res.data);
        const cards = res.data.map((item) => {
          console.log(item);
          return shoes(item);
        });
        routeDiv.append(cardContainer(cards, params.data.name));
      });
    });

  // .notFound(() => {
  //   console.log('Page not found');
  // });
  router.resolve();
  return router;
}

export default routerFunction;
