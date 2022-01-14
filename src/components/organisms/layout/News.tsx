import axios from "axios";
import { memo, useEffect, useState, VFC } from "react";
import styles from "../../../styles/news/news.module.css";
import { NewsType } from "../../../types/newsType";

export const News: VFC = memo(() => {
  const [newsData, setNewsData] = useState<NewsType[]>([]);
  const ApiUrl = "http://127.0.0.1:8000/api/news/";
  useEffect(() => {
    axios.get<NewsType[]>(ApiUrl).then((res) => {
      const data = res.data.map((news) => ({
        id: news.id,
        created_at: news.created_at,
        update_at: news.update_at,
        title: news.title,
        body: news.body,
      }));
      setNewsData(data);
    });
  }, []);
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
                    <a href="/">お知らせ</a>
                  </span>
                  <span className={styles.newsData}>{news.created_at}</span>
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
