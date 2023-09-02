import El from '@/library/index.js';
import filterBrands from '@/components/home/filter/index';
import footer from '@/components/home/footer/index';
import shoes from '@/components/home/shoes/index.js';
import routerFunction from '@/router';
// import axios from 'axios';
import publicAxios from '@/instance/axiosPublic';
import searchFunction from '@/functions/search/searchFunction/index';
import showSearchHistory from '@/functions/search/showSearchHistory/index';

// assign brands
const brands = [
  'nike',
  'adidas',
  'puma',
  'asics',
  'reebok',
  'newblanc',
  'converse',
  'more..',
];

// assign footer items
// const footer = () => {
//   const icons = [
//     { name: 'home-outline', text: 'Home' },
//     { name: 'bag-outline', text: 'Cart' },
//     { name: 'cart-outline', text: 'Orders' },
//     { name: 'wallet-outline', text: 'Wallet' },
//     { name: 'person-outline', text: 'Profile' },
//   ];
const homePage = () => {
  const cards = El({
    element: 'div',
    id: 'home-filter',
    className: 'flex flex-wrap justify-center items-center p-4',
  });
  publicAxios.get('/products').then((res) => {
    cards.append(
      ...res.data.map((item) => {
        return shoes(item);
      })
    );
  });
  return El({
    element: 'div',
    className: 'w-full h-full flex flex-col justify-between gap-4',
    child: [
      El({
        element: 'div',
        className: 'relative',
        id: 'home-container',
        child: [
          // navbar
          El({
            element: 'nav',
            className: 'flex justify-between px-6 pt-4 pb-6',
            child: [
              El({
                element: 'div',
                className: 'flex gap-x-4',
                child: [
                  El({
                    element: 'div',
                    child: El({
                      element: 'div',
                      innerHTML: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g clip-path="url(#clip0_32_9705)">
                    <rect width="48" height="48" fill="black" fill-opacity="0.9"/>
                    <rect width="48" height="48" fill="url(#pattern0)"/>
                    </g>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_32_9705" transform="scale(0.00104167)"/>
                    </pattern>
                    <clipPath id="clip0_32_9705">
                    <rect width="48" height="48" rx="24" fill="white"/>
                    </clipPath>
                    <image id="image0_32_9705" width="960" height="960" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8AAAAPACAYAAAD61hCbAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAC+/SURBVHgB7d1diF5Xwejx1Vp4I1KaFimhLe2AlNbedC4EmzQH85ZKUgvaYNuj1fecYFoiiB4haS56K7ZIUhAK0tpqK2qwBmm8CM57oymYj6rgnCtrczMNpOSomJQi5EZ6npWZaSeT+Xg+9sf6+P1gM5PJhEenszbr/6y1975q647/ej8AAABA4a4OAAAAUAEBDAAAQBUEMAAAAFW4ZvkXfj/z06sCAAAAJOT999/fOPjwu8ExPey/+R8P/K/L/mwFGAAAgKSNE78rEcAAAAAkq6n4jQQwAAAASWoyfiMBDAAAQHKajt9IAAMAAJCUNuI3EsAAAAAko634jQQwAAAASWgzfiMBDAAAQO/ajt9IAAMAANCrLuI3EsAAAAD0pqv4jQQwAAAAvWg5fmeXf0EAAwAA0LkO4vc/l39RAAMAANCpLuL3qquuurD8LwQwAAAAnekrfiMBDAAAQCf6jN9IAAMAANC6vuM3EsAAAAC0KoX4jQQwAAAArUklfiMBDAAAQCtSit9IAAMAANC41OI3EsAAAAA0KsX4jQQwAAAAjUk1fiMBDAAAQCNSjt9IAAMAADCx1OM3EsAAAABMJIf4jQQwAAAAY8slfiMBDAAAwFhyit9IAAMAADCy3OI3EsAAAACMJMf4jQQwAAAAQ8s1fiMBDAAAwFByjt9IAAMAALCu3OM3EsAAAACsqYT4jQQwAAAAqyolfiMBDAAAwIpKit9IAAMAAHCF0uI3EsAAAABcpsT4jQQwAAAAHyg1fiMBDAAAwCUlx28kgAEAACg+fiMBDAAAULka4jcSwAAAABWrJX4jAQwAAFCpmuI3EsAAAAAVqi1+IwEMAABQmRrjNxLAAAAAFak1fiMBDAAAUIma4zcSwAAAABWoPX4jAQwAAFA48TtPAAMAABRM/H5IAAMAABRK/F5OAAMAABRI/F5JAAMAABRG/K5MAAMAABRE/K5OAAMAABRC/K5NAAMAABRA/K5PAAMAAGRO/A5HAAMAAGRM/A5PAAMAAGRK/I5GAAMAAGRI/I5OAAMAAGRG/I5HAAMAAGRE/I5PAAMAAGRC/E5GAAMAAGRA/E5OAAMAACRO/DZDAAMAACRM/DZHAAMAACRK/DZLAAMAACRI/DZPAAMAACRG/LZDAAMAACRE/LZHAAMAACRC/LZLAAMAACRA/LZPAAMAAPRM/HZDAAMAAPRI/HZHAAMAAPRE/HZLAAMAAPRA/HZPAAMAAHRM/PZDAAMAAHRI/PZHAAMAAHRE/PZLAAMAAHRA/PZPAAMAALRM/KZBAAMAALRI/KZDAAMAALRE/KZFAAMAALRA/KZHAAMAADRM/KZJAAMAADRI/KZLAAMAADRE/KZNAAMAADRA/KZPAAMAAExI/OZBAAMAAExA/OZDAAMAAIxJ/OZFAAMAAIxB/OZHAAMAAIxI/OZJAAMAAIxA/OZLAAMAAAxJ/OZNAAMAAAxB/OZPAAMAAKxD/JZBAAMAAKxB/JZDAAMAAKxC/JZFAAMAAKxA/JZHAAMAACwjfsskgAEAAJYQv+USwAAAAAvEb9kEMAAAQBC/NRDAAABA9cRvHQQwAABQNfFbDwEMAABUS/zWRQADAABVEr/1EcAAAEB1xG+dBDAAAFAV8VsvAQwAAFRD/NZNAAMAAFUQvwhgAACgeOKXSAADAABFE78sEsAAAECxxC9LCWAAAKBI4pflBDAAAFAc8ctKBDAAAFAU8ctqBDAAAFAM8ctaBDAAAFAE8ct6BDAAAJA98cswBDAAAJA18cuwBDAAAJAt8csoBDAAAJAl8cuoBDAAAJAd8cs4BDAAAJAV8cu4BDAAAJAN8cskBDAAAJAF8cukBDAAAJA88UsTBDAAAJA08UtTBDAAAJAs8UuTBDAAAJAk8UvTBDAAAJAc8UsbBDAAAJAU8UtbBDAAAJAM8UubBDAAAJAE8UvbBDAAANA78UsXBDAAANAr8UtXBDAAANAb8UuXBDAAANAL8UvXBDAAANA58UsfBDAAANAp8UtfBDAAANAZ8UufBDAAANAJ8UvfBDAAANA68UsKBDAAANAq8UsqBDAAANAa8UtKBDAAANAK8UtqBDAAANA48UuKBDAAANAo8UuqBDAAANAY8UvKBDAAANAI8UvqBDAAADAx8UsOBDAAADAR8UsuBDAAADA28UtOBDAAADAW8UtuBDAAADAy8UuOBDAAADAS8UuuBDAAADA08UvOBDAAADAU8UvuBDAAALAu8UsJBDAAALAm8UspBDAAALAq8UtJBDAAALAi8UtpBDAAAHAF8UuJBDAAAHAZ8UupBDAAAPAB8UvJBDAAAHCJ+KV0AhgAABC/VEEAAwBA5cQvtRDAAABQMfFLTQQwAABUSvxSGwEMAAAVEr/USAADAEBlxC+1EsAAAFAR8UvNBDAAAFRC/FI7AQwAABUQvyCAAQCgeOIX5glgAAAomPiFDwlgAAAolPiFywlgAAAokPiFKwlgAAAojPiFlQlgAAAoiPiF1QlgAAAohPiFtQlgAAAogPiF9QlgAADInPiF4QhgAADImPiF4QlgAADIlPiF0QhgAADIkPiF0QlgAADIjPiF8QhgAADIiPiF8QlgAADIhPiFyQhgAADIgPiFyQlgAABInPiFZghgAABImPiF5ghgAABIlPiFZglgAABIkPiF5glgAABIjPiFdghgAABIiPiF9ghgAABIhPiFdglgAABIgPiF9glgAADomfiFbghgAADokfiF7ghgAADoifiFbglgAADogfiF7glgAADomPiFfghgAADokPiF/ghgAADoiPiFfglgAADogPiF/glgAABomfiFNAhgAABokfiFdAhgAABoifiFtAhgAABogfiF9AhgAABomPiFNAlgAABokPiFdAlgAABoiPiFtAlgAABogPiF9AlgAACYkPiFPAhgAACYgPiFfAhgAAAYk/iFvAhgAAAYg/iF/AhgAAAYkfiFPAlgAAAYgfiFfAlgAAAYkviFvAlgAAAYgviF/AlgAABYh/iFMghgAABYg/iFcghgAABYhfiFsghgAABYgfiF8ghgAABYRvxCmQQwAAAsIX6hXAIYAAAWiF8omwAGAIAgfqEGAhgAgOqJX6iDAAYAoGriF+ohgAEAqJb4hboIYAAAqiR+oT4CGACA6ohfqJMABgCgKuIX6iWAAQCohviFuglgAACqIH4BAQwAQPHELxAJYAAAiiZ+gUUCGACAYolfYCkBDABAkcQvsJwABgCgOOIXWIkABgCgKOIXWI0ABgCgGOIXWIsABgCgCOIXWI8ABgAge+IXGIYABgAga+IXGJYABgAgW+IXGIUABgAgS+IXGJUABgAgO+IXGIcABgAgK+IXGJcABgAgG+IXmIQABgAgC+IXmJQABgAgeeIXaIIABgAgaeIXaIoABgAgWeIXaJIABgAgSeIXaJoABgAgOeIXaIMABgAgKeIXaIsABgAgGeIXaJMABgAgCeIXaJsABgCgd+IX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"/>
                    </defs>
                    </svg>
                    `,
                      className: 'rounded-full w-12 h-12',
                    }),
                  }),
                  El({
                    element: 'div',
                    className: 'flex flex-col',
                    child: [
                      El({
                        element: 'span',
                        child: 'Good Morning 👋',
                        className: 'text-gray-500',
                      }),
                      El({
                        element: 'span',
                        child: 'Said Abdilar',
                        className: 'font-bold',
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex items-center gap-x-2',
                child: [
                  El({
                    element: 'ion-icon',
                    name: 'notifications-outline',
                    className: 'text-3xl',
                  }),
                  El({
                    element: 'ion-icon',
                    name: 'heart-outline',
                    className: 'text-3xl',
                  }),
                ],
              }),
            ],
          }),
          // search bar
          El({
            element: 'div',
            className: 'relative px-4 pb-6',
            child: [
              El({
                element: 'input',
                type: 'text',
                placeholder: 'Search',
                className:
                  'py-2 w-full pl-10 bg-slate-50 placeholder:text-slate-300 text-slate-500 rounded border-none focus:ring-gray-400',
                onkeyup: (e) => {
                  searchFunction(e);
                },
                onfocus: () => {
                  console.log('ss');
                  showSearchHistory();
                },
              }),
              El({
                element: 'ion-icon',
                name: 'search-outline',
                className: 'absolute top-3 left-7 text-lg text-gray-300',
              }),
            ],
          }),
          // brands
          El({
            element: 'div',
            className:
              'px-4 pb-7 flex flex-wrap justify-center items-center gap-x-5 gap-y-8',
            child: brands.map((brand) =>
              El({
                element: 'div',
                className: 'flex flex-col items-center',
                onclick: () => {
                  routerFunction().navigate(`/products/${brand}`);
                },
                child: [
                  El({
                    element: 'button',
                    // onclick: () => {
                    //   console.log(brand);
                    //   routerFunction().navigate(`/${brand}`);
                    //   publicAxios
                    //     .get(`/products?brand=${brand}`)
                    //     .then((data) => console.log(data));
                    // },
                    className:
                      'w-16 h-16 bg-gray-200 rounded-full flex justify-center items-center mb-4',
                    child: El({
                      element: 'img',
                      src: `./img/brands/${brand}.png`,
                    }),
                  }),
                  El({
                    element: 'span',
                    child: brand.charAt(0).toUpperCase() + brand.slice(1),
                  }),
                ],
              })
            ),
          }),
          /// filter
          El({
            element: 'div',
            child: [filterBrands()],
          }),
        ],
      }),
      /// shoes

      El({
        element: 'div',
        child: [cards],
      }),
      // footer items
      El({
        element: 'div',
        className: 'fixed bottom-[0px] left-[30px] bg-white',
        child: [footer()],
      }),
    ],
  });
};
export default homePage;
