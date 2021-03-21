
import ButtonLocation from '../button-location';
import ButtonFilters from '../button-filters';

import styles from './styles.module.scss';

function HeaderFilters(props) {
  return (
    <div className={styles.filters}>
      <ButtonLocation
        className={styles.button}
        text="Россия"
        size="btn-size-normal"
        color="btn-color-grey"
        height="btn-height-40"
      />
      <ButtonFilters
        className={styles.button}
        text="Фильтры"
        size="btn-size-normal"
        color="btn-color-grey"
        height="btn-height-40"
      />
      {/* <button className={styles.button}>
        <i className={styles.icon}>
          <SvgLocation />
        </i>
        <span className={styles.text}>Россия</span>
      </button>
      <button className={styles.button}>
        <i className={styles.icon}>
          <SvgFilter />
        </i>
        <span className={styles.text}>Фильтры</span>
      </button> */}
    </div>
  );
}

export default HeaderFilters;