import { h } from '@helpers';

export const createHello = () => {
  return h('div', { className: 'hello' }, ['Hello :)']);
};
