import PropTypes from 'prop-types';

import Button from '../button';

import styles from './styles.module.scss';

function HeaderLogo(props) {
  return (
    <div className={styles.logo}>
      <a href="/" className={styles.logo__text}>{props.logoText}</a>
      <Button
        text={"Войти"}
        height={"height-32"}
        color={"color-orange"}
      />
    </div>
  );
}
HeaderLogo.defaultProps = {
	logoText: 'Logo Title'
 };

HeaderLogo.propTypes = {
	logoText: PropTypes.string
};

export default HeaderLogo;