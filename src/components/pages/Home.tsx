import { memo, VFC } from "react";
import styles from "../../styles/home/home.module.css";

import backgroundImage1 from "../../static/images/backgroundImage1.jpg";
import backgroundImage2 from "../../static/images/backgroundImage2.jpg";
import backgroundImage3 from "../../static/images/backgroundImage3.jpg";
import backgroundImage4 from "../../static/images/backgroundImage4.jpg";

import { News } from "../organisms/cms/News";

const news = {
  id: 2021,
  title: "ステーションの閉館時間が変更されました",
};

export const Home: VFC = memo(() => {
  return (
    <main>
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
      </section>

      <section className={styles.introWrapper}>
        <p className={styles.intro}>
          利用者の皆様に安心・幸せを届ける「訪問看護ステーション」
        </p>
      </section>

      <div className={styles.mainWrap}>
        <ul className={styles.fTitleBox}>
          <li className={styles.fTitle}>News</li>
          <li className={styles.fLine}></li>
          <li className={styles.fText}>イベント & ニュース</li>
        </ul>
        {/* <div className={styles.newsWrap}>
          <div className={styles.newsInnerWrap}>
            <ul className={styles.newsList}>
              <li className={styles.newsItem}>
                <span className={styles.newsTag}>
                  <a href="/">お知らせ</a>
                </span>
                <span className={styles.newsData}>{news.newsData}</span>
                <span className={styles.newsTitle}>
                  <a href="/">{news.newsTitle}</a>
                </span>
              </li>
              <li className={styles.newsItem}>
                <span className={styles.newsTag}>
                  <a href="/">お知らせ</a>
                </span>
                <span className={styles.newsData}>2021-12-27</span>
                <span className={styles.newsTitle}>
                  <a href="/">
                    ここにテキストが入りますここにテキストが入りますここにテキストが入ります
                  </a>
                </span>
              </li>
              <li className={styles.newsItem}>
                <span className={styles.newsTag}>
                  <a href="/">お知らせ</a>
                </span>
                <span className={styles.newsData}>2021-12-27</span>
                <span className={styles.newsTitle}>
                  <a href="/">
                    ここにテキストが入りますここにテキストが入りますここにテキストが入ります
                  </a>
                </span>
              </li>
              <li className={styles.newsItem}>
                <span className={styles.newsTag}>
                  <a href="/">お知らせ</a>
                </span>
                <span className={styles.newsData}>2021-12-27</span>
                <span className={styles.newsTitle}>
                  <a href="/">
                    ここにテキストが入りますここにテキストが入りますここにテキストが入ります
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div> */}
        <News news={news} />
      </div>

      <section className={styles.bgPc}></section>
    </main>
  );
});
