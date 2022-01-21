/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, VFC } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/news/news.module.css";
import { NewsType } from "../../../types/newsType";
import { useAllNews } from "../apiHooks/useAllNews";
import ScrollRevealContainer from "../utils/ScrollReveal";

export const News: VFC = memo(() => {
  const { getNews, newsData } = useAllNews();

  useEffect(() => getNews(), []);

  const filterData = newsData.filter((data) => {
    return data.id < 4;
  });

  return (
    <ScrollRevealContainer move="bottom">
      <div className={styles.mainWrap}>
        <ul className={styles.fTitleBox}>
          <li className={styles.fTitle}>News</li>
          <li className={styles.fLine}></li>
          <li className={styles.fText}>イベント & ニュース</li>
        </ul>
        <div className={styles.newsWrap}>
          <div className={styles.newsInnerWrap}>
            <ul className={styles.newsList}>
              {filterData.map((news: NewsType, index) => {
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
              <span className={styles.newsListTag}>
                <Link to="/news_page">News一覧ページへ &gt;&gt;</Link>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </ScrollRevealContainer>
  );
});
