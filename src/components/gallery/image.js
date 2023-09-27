import styles from './gallery.module.scss';
import { h } from '@helpers';

export const createImage = (props) => {
  return h('div', { className: styles.imageWrapper }, [h('img', { className: styles.image, ...props })]);
};
