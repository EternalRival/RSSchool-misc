import styles from './gallery.module.css';
import { h } from '@helpers';

export const createGallery = () => h('section', { className: styles.gallery });
