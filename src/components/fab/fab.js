import styles from './fab.module.css';
import { h } from '@helpers';

export const createFAB = () => h('input', { type: 'color', className: styles.fab });
