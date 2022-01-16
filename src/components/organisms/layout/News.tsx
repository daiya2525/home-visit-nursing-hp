import { memo, VFC } from "react";
import styles from "../../../styles/news/news.module.css";
import { NewsType } from "../../../types/newsType";
import { useAllNews } from "../apiHooks/useAllNews";

export const News: VFC = memo(() => {
  const { newsData } = useAllNews();

  const filterData = newsData.filter((data) => {
    return data.id < 4;
  });

  return (
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
                    <a href="/home/news_page">お知らせ</a>
                  </span>
                  <span className={styles.newsData}>{news.created_at}</span>
                  <span className={styles.newsTitle}>
                    <a href={`/news_detail/${news.id}`}>{news.title}</a>
                  </span>
                </li>
              );
            })}
            <span className={styles.newsListTag}>
              <a href="/home/news_page">News一覧ページへ &gt;&gt;</a>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
});
