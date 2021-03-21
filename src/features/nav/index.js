import cn from 'classnames';

import SvgUser from '../../componetns/icons/user';
import SvgNews from '../../componetns/icons/news';
import SvgFavorites from '../../componetns/icons/favorites';
import SvgDialog from '../../componetns/icons/dialog';

import styles from './styles.module.scss';

function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <a href="/" className={styles.nav__link}>
          <i className={styles.nav__icon}>
            <SvgUser />
          </i>
          <span className={styles.nav__text}>Профиль</span>
        </a>
        <a href="/" className={cn(styles.nav__link, styles.nav__link_active)}>
          <i className={styles.nav__icon}>
            <SvgNews />
          </i>
          <span className={styles.nav__text}>Лента</span>
        </a>
        <a href="/" className={styles.nav__link}>
          <i className={styles.nav__icon}>
            <SvgFavorites />
          </i>
          <span className={styles.nav__text}>Избранные</span>
        </a>
        <a href="/" className={styles.nav__link}>
          <i className={styles.nav__icon}>
            <SvgDialog />
          </i>
          <span className={styles.nav__text}>Сообщения</span>
        </a>
      </nav>
    </>
  );
}

export default Nav;