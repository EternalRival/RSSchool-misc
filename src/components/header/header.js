import styles from './header.module.css';
import { h } from '@helpers';

export const createHeader = () => h('header', { className: styles.header });
