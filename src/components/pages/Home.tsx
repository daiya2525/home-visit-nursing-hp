import { memo, VFC } from "react";
import styles from "../../styles/home/home.module.css";

import backgroundImage1 from "../../static/images/backgroundImage1.jpg";
import backgroundImage2 from "../../static/images/backgroundImage2.jpg";
import backgroundImage3 from "../../static/images/backgroundImage3.jpg";
import backgroundImage4 from "../../static/images/backgroundImage4.jpg";

import { News } from "../organisms/layout/News";
import { Message } from "../organisms/layout/Message";
import { Visit } from "../organisms/layout/Visit";
import { Contents } from "../organisms/layout/Contents";

export const Home: VFC = memo(() => {
  return (
    <main className={styles.mainWrapper}>
      <section className={styles.bgImageContainer}>
        <div className={styles.bgImageWrapper}>
          {/* <ul className={styles.bgText}>
            <li className={styles.bg_li1}>続けられるように。</li>
            <li className={styles.bg_li2}>生活が</li>
            <li className={styles.bg_li3}>住み慣れたご自宅で</li>
          </ul> */}
          <img
            className={styles.bgItem1}
            src={backgroundImage1}
            alt="背景画像です"
          />
          <img
            className={styles.bgItem1}
            src={backgroundImage2}
            alt="背景画像2です"
          />
          <img
            className={styles.bgItem1}
            src={backgroundImage3}
            alt="背景画像3です"
          />
          <img
            className={styles.bgItem1}
            src={backgroundImage4}
            alt="背景画像4です"
          />
        </div>
      </section>
      <div className={styles.introWrapper}>
        <p className={styles.intro}>
          利用者の皆様に安心・幸せを届ける「訪問看護ステーション」
        </p>
      </div>

      <section className={styles.bgPc}>
        <News />
        <Message />
        <Visit />
        <Contents />
      </section>
    </main>
  );
});
