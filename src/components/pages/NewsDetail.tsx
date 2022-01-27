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
        setDetailData(res.data);
      });
  }, []);

  return (
    <div className={styles.mainWrapper}>
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
            <Link to="/news_page" className="navButton">
              NEWS一覧ページ
            </Link>
          </li>
          <li>{detailData?.title}</li>
        </ul>
      </nav>
      <div className={styles.newsWrap}>
        <div className={styles.newsInner}>
          <h3 className={styles.newsTitle}>
            {detailData?.title}
            <br />
            <small className={styles.newsUpdate}>
              {detailData?.created_at}
            </small>
          </h3>
          <p className={styles.newsBody}>{detailData?.body}</p>
        </div>
      </div>
    </div>
  );
});
