import styles from './header.module.scss';
import { h } from '@helpers';

export const createHeader = () => h('header', { className: styles.header });
