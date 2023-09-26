import styles from './main.module.css';
import { h } from '@helpers';

export const createMain = () => h('main', { className: styles.main });
