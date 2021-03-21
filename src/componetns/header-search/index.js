import PropTypes from 'prop-types';

import SvgSearch from '../icons/search';

import styles from './styles.module.scss';

function HeaderSearch(props) {
  return (
    <div className={styles.search}>
      <input type="search" className={styles.search__field} placeholder={props.placeholder} />
      <i className={styles.search__icon}>
        <SvgSearch
          width="18"
          height="18"
          fill="#7C7E8F"
        />
      </i>
    </div>
  );
}
HeaderSearch.defaultProps = {
  placeholder: 'Поиск..',
};

 HeaderSearch.propTypes = {
	placeholder: PropTypes.string,
};

export default HeaderSearch;