import styles from './gallery.module.css';
import { h } from '@helpers';

export const createImage = (props) => {
  return h('div', { className: styles.imageWrapper }, [h('img', { className: styles.image, ...props })]);
};
