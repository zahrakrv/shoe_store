import El from '@/library/index';
import getSearchData from '@/functions/search/routerOfSearch/index';
import deleteSearchHis from '@/functions/search/deleteSearchHis/deleteSearchHis';

const showSearchElem = (oldSearch) => {
  // console.log(oldSearch);
  return El({
    element: 'div',
    id: 'searchHistoryElem',
    className:
      'absolute flex flex-col w-full mt-2 top-[127px] left-0 p-4 bg-white',
    child: [
      El({
        element: 'div',
        className: 'flex items-center justify-between p-2',
        child: [
          El({
            element: 'span',
            className: 'text-2xl font-bold',
            child: 'recent',
          }),
          El({
            element: 'button',
            className: 'text-xl font-bold',
            child: 'Clear All',
            onclick: (e) => {
              deleteSearchHis(e.target.closest('button').innerText);
            },
          }),
        ],
      }),
      El({
        element: 'ul',
        className: 'p-2 border-t border-t-1 list-none mt-2 ',
        child: [...liMaker(oldSearch)],
      }),
    ],
  });
};

function liMaker(searchArr) {
  // console.log(searchArr);
  const liElemsArr = searchArr.map((li) => {
    return El({
      element: 'li',
      className:
        'flex items-center justify-between text-2xl font-normal text-gray-400 pt-2 cursor-pointer',
      /// open new page of result of search
      onclick: (e) => {
        getSearchData(e);
      },
      child: [
        El({
          element: 'p',
          child: li,
        }),
        El({
          element: 'ion-icon',
          name: 'close-circle-outline',
          className: 'text-3xl',
        }),
      ],
    });
  });
  return liElemsArr;
}
export default showSearchElem;
