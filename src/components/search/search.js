import styles from './search.module.scss';
import { h } from '@helpers/h';

export const createSearch = () => h('input', { type: 'search', className: styles.searchInput, placeholder: 'search…' });
