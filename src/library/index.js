// const El = ({
//   element,
//   child,
//   dataset,
//   eventListener,
//   restAttrs = {},
//   ...rest
// }) => {
//   const el = document.createElement(element);
//   for (const key in rest) {
//     el[key] = rest[key];
//   }

//   for (const key in restAttrs) {
//     el.setAttribute(key, restAttrs[key]);
//   }

//   if (child) Array.isArray(child) ? el.append(...child) : el.append(child);
//   if (dataset) {
//     for (const key in dataset) {
//       el.datset[key] = dataset[key];
//     }
//     if (eventListener) {
//       eventListener.map((elem) =>
//         el.addEventListener(elem.event, elem.callback)
//       );
//     }
//   }

//   return el;
// };

// export default El;

const El = ({
  element,
  child,
  dataset,
  eventListener,
  restAttrs = {},
  ...rest
}) => {
  const el = document.createElement(element);
  for (const key in rest) {
    el[key] = rest[key];
  }
  Array.isArray(child) ? el.append(...child) : child && el.append(child);
  if (dataset) {
    for (const key in dataset) {
      // console.log(key);
      el.dataset[key] = dataset[key];
    }
  }
  for (const key in restAttrs) {
    el.setAttribute(key, restAttrs[key]);
  }

  if (eventListener) {
    eventListener.map((elem) => el.addEventListener(elem.event, elem.callback));
  }
  return el;
};
export default El;
