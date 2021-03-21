
import Nav from '../nav';

import styles from './styles.module.scss';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Nav />
    </div>
  );
}

export default Sidebar;