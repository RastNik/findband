
import SvgInstagram from '../../componetns/icons/instagram';
import SvgTwitter from '../../componetns/icons/twitter';
import SvgVk from '../../componetns/icons/vk';

import styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__socials}>
        <a href="/" className={styles.footer__socials_link}>
          <SvgInstagram />
        </a>
        <a href="/" className={styles.footer__socials_link}>
          <SvgTwitter />
        </a>
        <a href="/" className={styles.footer__socials_link}>
          <SvgVk />
        </a>
      </div>
      <div className={styles.footer__nav}>
        <a href="/" className={styles.footer__nav_link}>Политика конфиденциальности</a>
        <a href="/" className={styles.footer__nav_link}>Условия использования</a>
        <a href="/" className={styles.footer__nav_link}>Рекламные документы</a>
      </div>
      <p className={styles.footer__copy}>© FINDBAND.RU 2020</p>
    </footer>
  );
}

export default Footer;