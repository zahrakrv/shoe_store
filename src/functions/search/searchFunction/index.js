import showSearchElem from '@/functions/search/showSearch/index';
import showSearchPage from '@/functions/search/showSearchPage/index';
const searchArr = [];
const searchFunction = (e) => {
  // console.log(e.key);
  // console.log(e.target.value);

  if (e.key === 'Enter') {
    const oldSearches = JSON.parse(localStorage.getItem('searchHistory'));
    console.log(oldSearches);
    if (oldSearches) {
      oldSearches.push(e.target.value);
      localStorage.setItem('searchHistory', JSON.stringify(oldSearches));
    } else {
      searchArr.push(e.target.value);
      localStorage.setItem('searchHistory', JSON.stringify(searchArr));
      document
        .getElementById('home-container')
        .append(showSearchElem(searchArr));
      showSearchPage(searchArr[0]);
    }
  }
};
export default searchFunction;
