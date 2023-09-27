import styles from './logo.module.scss';
import { h } from '@helpers/h';
import iconSrc from './assets/camera.svg';

export const createLogo = () =>
  h('a', { className: styles.logo }, [h('img', { src: iconSrc, className: styles.camera }), 'Image Gallery']);
