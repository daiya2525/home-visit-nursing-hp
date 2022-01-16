import { memo, VFC } from "react";

import styles from "../../styles/newspage/news_page.module.css";
import background from "../../static/images/news_page_bg.jpg";

export const NewsPage: VFC = memo(() => {
  return (
    <main>
      <section
        className={styles.introWrapper}
        style={{ backgroundImage: `url(${background})` }}
      >
        <ul className={styles.fTitleBox}>
          <li className={styles.fTitle}>News</li>
          <li className={styles.fLine}></li>
          <li className={styles.fText}>イベント & ニュース</li>
        </ul>
      </section>
    </main>
  );
});
