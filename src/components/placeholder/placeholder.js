import styles from './placeholder.module.css';
import { h } from '@helpers';

export const placeholder = (message) => h('div', { className: styles.placeholder }, [message]);
