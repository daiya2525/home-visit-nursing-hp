import { memo, VFC } from "react";

import styles from "../../styles/newsPage/news_page.module.css";
import news_page_bg from "../../static/images/news_page_bg.jpg";
import { useAllNews } from "../organisms/apiHooks/useAllNews";
import { NewsType } from "../../types/newsType";
import { Link } from "react-router-dom";

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
          <ul className={styles.newsList}>
            {newsData.map((news: NewsType, index) => {
              return (
                <li key={index} className={styles.newsItem}>
                  <span className={styles.newsTag}>
                    <Link to="/news_page" className={styles.newsTagButton}>
                      お知らせ
                    </Link>
                  </span>
                  <span className={styles.newsData}>{news.created_at}</span>
                  <span className={styles.newsTitle}>
                    <Link
                      to={`/news_page/${news.id}`}
                      className={styles.newsTitleButton}
                    >
                      {news.title}
                    </Link>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
});
