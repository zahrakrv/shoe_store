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
  data,
  // :{tabsToggle:""}
  eventListener,
  restAttrs = {},
  ...rest
}) => {
  const el = document.createElement(element);
  for (const key in rest) {
    el[key] = rest[key];
  }
  Array.isArray(child) ? el.append(...child) : child && el.append(child);
  if (data) el.dataset[data.name] = data.value;
  for (const key in restAttrs) {
    el.setAttribute(key, restAttrs[key]);
  }

  if (eventListener) {
    eventListener.map((elem) => el.addEventListener(elem.event, elem.callback));
  }
  return el;
};
export default El;

// const El = ({ element, child, restAttrs = {}, eventListener, ...rest }) => {
//   const elem = document.createElement(element);
//   for (const key in rest) {
//     elem[key] = rest[key];
//   }
//   for (const key in restAttrs) {
//     elem.setAttribute(key, restAttrs[key]);
//   }
//   if (child) Array.isArray(child) ? elem.append(...child) : elem.append(child);
//   if (eventListener) {
//     eventListener.map((el) => elem.addEventListener(el.event, el.callback));
//   }
//   return elem;
// };
// export default El;
