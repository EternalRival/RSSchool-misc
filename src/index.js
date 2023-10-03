import '@assets/styles.scss';
import { createHello } from '@components';

const elements = {
  hello: createHello(),
};

const render = (root, elements) => {
  const { hello } = elements;

  root.append(hello);
};

render(document.body, elements);
