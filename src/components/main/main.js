import styles from './main.module.scss';
import { h } from '@helpers';

export const createMain = () => h('main', { className: styles.main });
