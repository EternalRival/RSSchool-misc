import styles from './gallery.module.scss';
import { h } from '@helpers';

export const createGallery = () => h('section', { className: styles.gallery });
