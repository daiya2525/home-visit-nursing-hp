/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { memo, VFC } from "react";
import { Link } from "react-router-dom";

import styles from "../../../styles/contents/contents.module.css";
import aboutPic from "../../../static/images/company_place.webp";
import memberPic from "../../../static/images/member.jpg";
import contactPic from "../../../static/images/contact_picture.webp";
import rightLogo from "../../../static/images/right-angel.svg";
import ScrollRevealContainer from "../utils/ScrollReveal";

export const Contents: VFC = memo(() => {
  return (
    <ScrollRevealContainer move="bottom">
      <div className={styles.mainWrap}>
        <Link to="/about" className={styles.aboutLink}>
          <div className={styles.picture}>
            <img
              src={aboutPic}
              alt="会社写真"
              width={"600px"}
              height={"800px"}
            />
          </div>
          <div className={styles.text}>
            <div>
              <span>About</span>
              <span>訪問看護ステーションについて</span>
            </div>
            <img
              src={rightLogo}
              alt="矢印アイコンの画像です"
              width={"24"}
              height={"24px"}
            />
          </div>
        </Link>
        <Link to="/member" className={styles.memberLink}>
          <div className={styles.picture}>
            <img
              src={memberPic}
              alt="メンバー写真です"
              width={"512px"}
              height={"340px"}
            />
          </div>
          <div className={styles.text}>
            <div>
              <span>Member</span>
              <span>メンバー</span>
            </div>
            <img
              src={rightLogo}
              alt="矢印アイコンの画像です"
              width={"24"}
              height={"24px"}
            />
          </div>
        </Link>
        <Link to="/contact" className={styles.contactLink}>
          <div className={styles.picture}>
            <img
              src={contactPic}
              alt="お問合せ写真です"
              width={"512px"}
              height={"340px"}
            />
          </div>
          <div className={styles.text}>
            <div>
              <span>Recruitment</span>
              <span>採用募集</span>
            </div>
            <img
              src={rightLogo}
              alt="矢印アイコンの画像です"
              width={"24"}
              height={"24px"}
            />
          </div>
        </Link>
      </div>
    </ScrollRevealContainer>
  );
});
