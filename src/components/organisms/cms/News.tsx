import { memo, VFC } from "react";
import { NewsType } from "../../../types/newsType";
import styles from "../../../styles/news/news.module.css";

type Props = {
  news: NewsType;
};

export const News: VFC<Props> = memo((props) => {
  const { news } = props;

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
            <li className={styles.newsItem}>
              <span className={styles.newsTag}>
                <a href="/">お知らせ</a>
              </span>
              <span className={styles.newsData}>2021-12-27</span>
              <span className={styles.newsTitle}>
                <a href="/">{news.title}</a>
              </span>
            </li>
            <li className={styles.newsItem}>
              <span className={styles.newsTag}>
                <a href="/">お知らせ</a>
              </span>
              <span className={styles.newsData}>2021-12-27</span>
              <span className={styles.newsTitle}>
                <a href="/">{news.title}</a>
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
      </div>
    </div>
  );
});
