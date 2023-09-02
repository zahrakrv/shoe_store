import publicAxios from '@/instance/axiosPublic';
import routerFunction from '@/router/index.js';
import shoes from '@/components/home/shoes/index';

const showSearchPage = (text) => {
  console.log(text);
  publicAxios.get(`/products?brand=${text}`).then((res) => {
    const carts = shoes(res.data);
    if (carts.length) {
      routerFunction().navigate(`/home/search/${text}`);
    } else {
      // routerFunction().navigate('/search/notfound');
    }
  });
};
export default showSearchPage;
