import axios from "axios";
import { memo, useEffect, useState, VFC } from "react";
import styles from "../../../styles/news/news.module.css";
import { NewsType } from "../../../types/newsType";

export const News: VFC = memo(() => {
  const [newsData, setNewsData] = useState<NewsType[]>([]);
  useEffect(() => {
    axios
      .get<NewsType[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const data = res.data.map((news) => ({
          id: news.id,
          userId: news.userId,
          title: news.title,
          body: news.body,
        }));
        setNewsData(data);
      });
  }, []);

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
            {newsData.map((news: NewsType, index) => {
              return (
                <li key={index} className={styles.newsItem}>
                  <span className={styles.newsTag}>
                    <a href="/">お知らせ</a>
                  </span>
                  <span className={styles.newsData}>{news.id}</span>
                  <span className={styles.newsTitle}>
                    <a href="/">{news.title}</a>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
});
