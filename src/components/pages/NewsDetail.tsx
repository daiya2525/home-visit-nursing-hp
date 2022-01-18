/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useState, VFC } from "react";
import { Link, useParams } from "react-router-dom";

// import styles from "../../styles/newspage/news_page.module.css";
import styles from "../../styles/newsDetail/news_detail.module.css";
import news_page_bg from "../../static/images/news_page_bg.jpg";
import axios from "axios";
import { NewsType } from "../../types/newsType";

export const NewsDetail: VFC = memo(() => {
  const [detailData, setDetailData] = useState<NewsType>();
  const { id } = useParams<{ id: string }>();
  const ApiUrl = "http://127.0.0.1:8000/api/news/";

  useEffect(() => {
    axios
      .get<NewsType>(ApiUrl + `${id}`, {
        params: {
          id: detailData,
        },
      })
      .then((res) => {
        console.log(res.data);
        setDetailData(res.data);
      });
  }, []);

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
            <li className={styles.newsItem}>
              <span className={styles.newsTag}>
                <Link to="/news_page" className={styles.newsTagButton}>
                  お知らせ
                </Link>
              </span>
              <p className={styles.newsData}>{detailData?.created_at}</p>
              <span className={styles.newsTitle}>
                <p className={styles.newsTitleButton}>{detailData?.title}</p>
              </span>
            </li>
            <li className={styles.newsBody}>{detailData?.body}</li>
          </ul>
        </div>
      </div>
    </main>
  );
});
