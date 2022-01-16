import { memo, VFC } from "react";

import styles from "../../styles/newspage/news_page.module.css";
import news_page_bg from "../../static/images/news_page_bg.jpg";
import { useAllNews } from "../organisms/apiHooks/useAllNews";
import { NewsType } from "../../types/newsType";

export const NewsPage: VFC = memo(() => {
  const { newsData } = useAllNews();

  return (
    <main className={styles.mainWrapper}>
      <div
        className={styles.introWrapper}
        style={{ backgroundImage: `url(${news_page_bg})` }}
      >
        <ul className={styles.fTitleBox}>
          <li className={styles.fTitle}>News</li>
          <li className={styles.fLine}></li>
          <li className={styles.fText}>イベント & ニュース</li>
        </ul>
      </div>
      <div className={styles.newsWrap}>
        <div className={styles.newsInnerWrap}>
          {newsData.map((news: NewsType, index) => {
            return (
              <ul className={styles.newsList}>
                <li key={index} className={styles.newsItem}>
                  <span className={styles.newsTag}>
                    <a href="/home/news_page">お知らせ</a>
                  </span>
                  <span className={styles.newsData}>{news.created_at}</span>
                  <span className={styles.newsTitle}>
                    <a href="/">{news.title}</a>
                  </span>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </main>
  );
});
