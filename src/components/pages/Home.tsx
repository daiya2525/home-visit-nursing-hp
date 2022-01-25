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
import ScrollRevealContainer from "../organisms/utils/ScrollReveal";

export const Home: VFC = memo(() => {
  return (
    <main className={styles.mainWrapper}>
      <section className={styles.bgImageContainer}>
        <div className={styles.bgImageWrapper}>
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
        <div className={styles.bgText}>
          <ScrollRevealContainer move="bottom">
            <div className={styles.bg_li1}>
              <span>続けられるように。</span>
            </div>
          </ScrollRevealContainer>
          <ScrollRevealContainer move="bottom">
            <div className={styles.bg_li2}>
              <span>末長く生活が</span>
            </div>
          </ScrollRevealContainer>
          <ScrollRevealContainer move="bottom">
            <div className={styles.bg_li3}>
              <span>住み慣れたご自宅で</span>
            </div>
          </ScrollRevealContainer>
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
