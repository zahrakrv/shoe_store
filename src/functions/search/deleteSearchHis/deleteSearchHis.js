const deleteSearchHis = (text) => {
  if (text === 'Clear All') {
    document.getElementById('searchHistoryElem').remove();
    localStorage.removeItem('searchHistory');
  } else {
    console.log('clear one');
  }
};
export default deleteSearchHis;
