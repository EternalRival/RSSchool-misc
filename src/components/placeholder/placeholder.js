import styles from './placeholder.module.scss';
import { h } from '@helpers';

export const placeholder = (message) => h('div', { className: styles.placeholder }, [message]);
