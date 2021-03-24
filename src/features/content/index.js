
import Post from '../../componetns/post';

import styles from './styles.module.scss';

function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.content__wrap}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Content;