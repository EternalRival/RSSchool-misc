import styles from './search.module.css';
import { h } from '@helpers/h';

export const createSearch = () => h('input', { type: 'search', className: styles.searchInput, placeholder: 'search…' });
