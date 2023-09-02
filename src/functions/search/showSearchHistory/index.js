import showSearchElem from '@/functions/search/showSearch/index';
const showSearchHistory = () => {
  const oldSearch = JSON.parse(localStorage.getItem('searchHistory'));
  console.log(oldSearch);
  if (oldSearch) {
    document.getElementById('home-container').append(showSearchElem(oldSearch));
  }
};
export default showSearchHistory;
