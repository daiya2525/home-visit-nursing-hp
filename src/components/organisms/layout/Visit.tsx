/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { memo, VFC } from "react";

import styles from "../../../styles/visit/visit.module.css";
// import ScrollRevealContainer from "../utils/ScrollReveal";
import mailPic from "../../../static/images/mail_image.jpg";
import visitPic from "../../../static/images/visit_image.jpg";
import interviewPic from "../../../static/images/interview_image.jpeg";
import ScrollRevealContainer from "../utils/ScrollReveal";

export const Visit: VFC = memo(() => {
  return (
    <div className={styles.mainWrap}>
      <ScrollRevealContainer move="bottom">
        <h2 className={styles.fTitle}>Visit</h2>
        <p className={styles.fText}>ステーションへの見学</p>
        <div className={styles.bTitle}>見学から採用の流れ</div>
        <div className={styles.bText}>
          けせらでは、若手からベテランの訪問看護師達が「最期まで暮らしたい場所がある」という、
          <br />
          ご利用者の願いを受け止めつつ日々地域を走っています。私達の想いに共感をして頂ける仲間をお待ちしております。
        </div>
      </ScrollRevealContainer>
      <ScrollRevealContainer move="left">
        <div className={styles.visitInner}>
          <div className={styles.contact_part}>
            <ul className={styles.contact_title}>
              <li className={styles.first_li}>
                <span>1</span>
              </li>
              <li className={styles.second_li}>お問い合わせ</li>
            </ul>
            <div className={styles.contact_body}>
              <ul>
                <li className={styles.first_li}>
                  <img
                    src={mailPic}
                    alt="お問合せイメージです"
                    width={"210px"}
                    height={"160px"}
                  />
                </li>
                <li className={styles.second_li}>
                  まずはお気軽にお問合せ
                  <br />
                  下さい！
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.contact_part}>
            <ul className={styles.contact_title}>
              <li className={styles.first_li}>
                <span>2</span>
              </li>
              <li className={styles.second_li}>見学</li>
            </ul>
            <div className={styles.contact_body}>
              <ul>
                <li className={styles.first_li}>
                  <img
                    src={visitPic}
                    alt="お問合せイメージです"
                    width={"210px"}
                    height={"160px"}
                  />
                </li>
                <li className={styles.second_li}>
                  ステーションで訪問看護の
                  <br />
                  リアルな現場を見学！
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.contact_part}>
            <ul className={styles.contact_title}>
              <li className={styles.first_li}>
                <span>3</span>
              </li>
              <li className={styles.second_li}>面接</li>
            </ul>
            <div className={styles.contact_body}>
              <ul>
                <li className={styles.first_li}>
                  <img
                    src={interviewPic}
                    alt="お問合せイメージです"
                    width={"210px"}
                    height={"160px"}
                  />
                </li>
                <li className={styles.second_li}>
                  入社後の不安な点や
                  <br />
                  各種条件も丁寧にご案内！
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.contact_part}>
            <ul className={styles.contact_title}>
              <li className={styles.first_li}>
                <span>4</span>
              </li>
              <li className={styles.second_li}>採用・入社</li>
            </ul>
            <div className={styles.contact_body}>
              <ul>
                <li className={styles.first_li}>
                  <img
                    src={mailPic}
                    alt="お問合せイメージです"
                    width={"210px"}
                    height={"160px"}
                  />
                </li>
                <li className={styles.second_li}>
                  入職後はスタッフによる
                  <br />
                  手厚いフォロー！
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollRevealContainer>
    </div>
  );
});
