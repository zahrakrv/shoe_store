import routerFunction from '@/router/index.js';
import publicAxios from '@/instance/axiosPublic';
/// checking if user enter wrong account information
const checkData = (email, pass) => {
  publicAxios('/users').then((res) => {
    const data = res.data[0];
    if (data.email === email && data.password === pass) {
      routerFunction().navigate('/home');
    } else {
      const error = document.getElementById('error-input');
      error.classList.remove('hidden');
      const inputPassword = document.getElementById('password');
      // const inputEmail = document.getElementById('email');
      const checkFocus = setInterval(() => {
        const isFocus = inputPassword === document.activeElement;
        if (isFocus === true) {
          error.classList.add('hidden');
          clearInterval(checkFocus);
        }
      }, 200);
    }
  });
};
export default checkData;
