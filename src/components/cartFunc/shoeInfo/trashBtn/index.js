import El from '@/library/index.js';

const trashBtn = () => {
  return El({
    element: 'button',
    className: 'flex items-center',
    child: El({
      element: 'ion-icon',
      name: 'trash-outline',
    }),
  });
};

export default trashBtn;
