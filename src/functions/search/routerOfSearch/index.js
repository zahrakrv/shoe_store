import routerFunction from '@/router/index';
import showSearchPage from '@/functions/search/showSearchPage/index';

const getSearchData = (e) => {
  const searchItem = e.target.closest('li').innerText;
  console.log(searchItem);
  routerFunction().navigate(`/search/${searchItem}`);
  showSearchPage(searchItem);
};
export default getSearchData;
