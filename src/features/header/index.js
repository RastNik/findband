
import HeaderLogo from '../../componetns/header-logo';
import HeaderContent from '../../componetns/header-content';

import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={"container"}>
        <div className={styles.header__box}>
          <HeaderLogo
            logoText={"Findband"}
          />
          <HeaderContent />
        </div>
      </div>
    </header>
  );
}

export default Header;