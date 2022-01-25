/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { memo, VFC } from "react";
import { Link } from "react-router-dom";

import styles from "../../../styles/footer/footer.module.css";
import companyLogo from "../../../static/images/nimil.png";

export const Footer: VFC = memo(() => {
  return (
    <footer>
      <div className={styles.footerWrap}>
        <div className={styles.footerInfo}>
          <div className={styles.Logo}>
            <img src={companyLogo} alt="会社ロゴ写真です" />
            <span></span>
            <p>訪問看護ステーション</p>
          </div>
          <p className={styles.address}>
            〒581-0882 大阪府八尾市恩智北町3丁目8番 2階
          </p>
          <div className={styles.infoInner}>
            <a href="tel:080-4018-0882">tel.080-4018-0882</a>
            <div>
              <Link to="/contact">お問合せはこちらから</Link>
            </div>
          </div>
          <ul className={styles.page_transition}>
            <li className={styles.transition1}>
              <Link to="/about">訪問看護ステーションについて</Link>
              <Link to="#">?</Link>
            </li>
            <li className={styles.transition2}>
              <Link to="/about">メンバー</Link>
              <Link to="#">?</Link>
            </li>
            <li className={styles.transition3}>
              <Link to="/about">採用募集</Link>
              <Link to="#">?</Link>
            </li>
            <li className={styles.transition4}>
              <Link to="/about">お問合せ</Link>
              <Link to="#">?</Link>
            </li>
          </ul>
          <p className={styles.copy_right}>
            © HOME VISIT NURSING, All Rights Reserved.
          </p>
        </div>
        <div className={styles.map_canvas}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.840228909214!2d135.62834045822694!3d34.61224090261365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001271a709630d9%3A0xf416008f659ac84a!2z44CSNTgxLTA4ODIg5aSn6Ziq5bqc5YWr5bC-5biC5oGp5pm65YyX55S677yS5LiB55uu77yW77yT4oiS77yY!5e0!3m2!1sja!2sjp!4v1642952166783!5m2!1sja!2sjp"
            width="532"
            height="460"
            aria-hidden="false"
            loading="lazy"
          ></iframe>
          "
        </div>
      </div>
    </footer>
  );
});
