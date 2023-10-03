export const h = (tagName, propsOrChildren = {}, children = []) => {
  const el = document.createElement(tagName);

  if (Array.isArray(propsOrChildren)) {
    el.append(...propsOrChildren);
  } else {
    Object.assign(el, propsOrChildren);
  }

  if (Array.isArray(children)) {
    el.append(...children);
  }

  return el;
};
