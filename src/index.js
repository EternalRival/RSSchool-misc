import '@assets/styles.scss';
import { h } from '@helpers';

const elements = {
  button: h('button', { className: 'button' }, ['Press me!']),
  print: h('span', { className: 'print' }),
};

const setup = () => {
  const { button, print } = elements;
  const setPrint = (text) => print.replaceChildren(text);

  const handleNoPress = () => setPrint('No key pressed');
  const handleLeftPress = () => setPrint('Left');
  const handleRightPress = () => setPrint('Right');
  const handleLeftRightPress = () => setPrint('Left+Right');
  const handleRightLeftPress = () => setPrint('Right+Left');

  const state = { 0: false, 2: false };

  button.addEventListener('contextmenu', (e) => e.preventDefault());

  button.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
      state[0] = true;
      return state[2] ? handleRightLeftPress() : handleLeftPress();
    } else if (e.button === 2) {
      state[2] = true;
      return state[0] ? handleLeftRightPress() : handleRightPress();
    }
  });
  button.addEventListener('mouseup', (e) => {
    if (e.button === 0) {
      state[0] = false;
    } else if (e.button === 2) {
      state[2] = false;
    }

    if (!state[0] && !state[2]) {
      return handleNoPress();
    } else if (state[0]) {
      return handleLeftPress();
    } else if (state[2]) {
      return handleRightPress();
    }
  });

  handleNoPress();
};

const render = (root, elements) => {
  const { button, print } = elements;

  root.append(button, ' ', print);
};

render(document.body, elements);
setup();
