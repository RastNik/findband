
import HeaderSearch from '../header-search';
import HeaderFilters from '../header-filters';

import styles from './styles.module.scss';

function HeaderContent() {
  return (
    <div className={styles.content}>
      <HeaderSearch
        placeholder="Поиск.."
      />
      <HeaderFilters />
    </div>
  );
}

export default HeaderContent;