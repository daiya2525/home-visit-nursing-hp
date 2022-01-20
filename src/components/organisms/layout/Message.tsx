/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { memo, VFC } from "react";

import styles from "../../../styles/message/message.module.css";
import ScrollRevealContainer from "../utils/ScrollReveal";
import innerbg from "../../../static/images/Message_inner_bg.jpeg";
// import ScrollRevealContainer2 from "../utils/ScrollReveal2";

export const Message: VFC = memo(() => {
  return (
    <div className={styles.mainWrap}>
      {/* <ScrollRevealContainer2 move="left"> */}
      <h2 className={styles.fTitle}>Message</h2>
      <p className={styles.fText}>みなさまへ</p>
      {/* </ScrollRevealContainer2> */}
      <ScrollRevealContainer move="right">
        <div className={styles.messageInner}>
          <div className={styles.messageBody}>
            <p className={styles.messageTitle}>
              あなたとあゆむ訪問看護の世界。
              <br />
              そこにあるのはみんな一緒のとびっきりな笑顔
            </p>
            <p className={styles.messageContent}>
              私たち訪問看護師は、ご自宅で療養される方々のお宅に訪問をして看護を提供いたします。
              ご自宅ですごされる皆様は、ご自身が最もリラックスできる環境の中、にこやかに私達を出迎えてくれます。ひとりひとりの利用者さんとしっかりと向き合った看護を提供できることは、訪問看護ならではの醍醐味です。
              もちろん、様々な利用者さんと深く関わっていく中での大変な場面もありますが、スタッフ皆で支え合いながら、最後には利用者さんも一緒になって笑い合うことができます。
              出会えた皆様のかけがえのない人生の１ページに、訪問看護師としての時間を重ねさせてください。とびっきりの笑顔を届けます。
            </p>
          </div>
          <img src={innerbg} className={styles.messageBottom} />
        </div>
      </ScrollRevealContainer>
    </div>
  );
});
