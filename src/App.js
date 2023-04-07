import El from '@/library/index.js';
// import firstPage from '@/components/firstPage/index.js';
// import welcomePage from '@/components/welcomePage/index.js';
// import checkout from '@/components/checkout/checkout1/index.js';
// import shippingAddress from '@/components/checkout/checkout2/index';
import chooseShipping from '@/components/checkout/checkout3';
// import login from '@/components/login/index.js';
const App = () => {
  const app = El({
    element: 'div',
    child: [chooseShipping()],
  });

  return app;
};

export default App;
