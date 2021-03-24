import cn from "classnames";

import SvgLike from '../icons/like';
import SvgLikeActive from '../icons/like-active';
import SvgPlay from '../icons/play';
import SvgPiano from '../icons/piano';
import SvgMicrophone from '../icons/microphone';

import styles from './styles.module.scss';

function Post() {
  return (
    <div className={styles.block}>
      <div className={styles.block__img}>
        <img src="img/img-1.jpg" alt="" />
        <button className={cn(styles.block__like, styles.block__like_active)}>
          <SvgLike className={styles.block__like_svg} />
          <SvgLikeActive className={cn(styles.block__like_svg, styles.block__like_svg_active)} />
        </button>
        <button className={styles.block__play}>
          <SvgPlay className={styles.block__play_svg} />
        </button>
      </div>
      <div className={styles.block__content}>
        <div className={styles.block__name}>
          <p className={styles.block__name_text}>realouwi</p>
        </div>
        <div className={styles.block__category}>
          <div className={styles.block__category_item}>
            <i className={styles.block__category_icon}>
              <SvgPiano />
            </i>
            <p className={styles.block__category_text}>Клавишник</p>
          </div>
          <span className={styles.block__category_separator}>ищет</span>
          <div className={styles.block__category_item}>
            <i className={styles.block__category_icon}>
              <SvgMicrophone />
            </i>
            <p className={styles.block__category_text}>Вокалиста</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;