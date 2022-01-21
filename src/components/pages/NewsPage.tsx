/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, VFC } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/newsPage/news_page.module.css";
import news_page_bg from "../../static/images/news_page_bg.jpg";
import { useAllNews } from "../organisms/apiHooks/useAllNews";
import { NewsType } from "../../types/newsType";

export const NewsPage: VFC = memo(() => {
  const { getNews, newsData } = useAllNews();

  useEffect(() => getNews(), []);

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
      <nav role="navigation" className={styles.newsDetailNav}>
        <ul>
          <li>
            <Link to="/" className="navButton">
              TOPページ
            </Link>
          </li>
          <li>
            <span className="navButton">NEWS一覧ページ</span>
          </li>
        </ul>
      </nav>
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
                  <span className={styles.newsData}>{news.updated_at}</span>
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
