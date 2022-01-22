/* eslint-disable jsx-a11y/anchor-is-valid */
import { memo, VFC } from "react";

import styles from "../../../styles/footer/footer.module.css";

export const Footer: VFC = memo(() => {
  return (
    <footer>
      <div className={styles.footerWrap}>
        <div className={styles.footerInfo}>
          <h1>訪問看護ステーション</h1>
          <p className={styles.address}>
            〒581-0882 大阪府八尾市恩智北町3丁目8番 2階
          </p>
          <a href="tel:080-4018-0882">tel.080-4018-0882</a>
        </div>
        <div className={styles.map_canvas}></div>
        <p className={styles.copy_right}>aiueo</p>
      </div>
    </footer>
  );
});
