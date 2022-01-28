/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { memo, VFC } from "react";

import styles from "../../../styles/message/message.module.css";
import ScrollRevealContainer from "../utils/ScrollReveal";
// import innerbg from "../../../static/images/Message_inner_bg.jpeg";
import message_image from "../../../static/images/message_image.jpg";

export const Message: VFC = memo(() => {
  return (
    <ScrollRevealContainer move="bottom">
      <div className={styles.mainWrap}>
        <h2 className={styles.fTitle}>Message</h2>
        <p className={styles.fText}>みなさまへ</p>
        <ScrollRevealContainer move="bottom">
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
            <div className={styles.message_image_wrapper}>
              <img
                src={message_image}
                className={styles.messageImage}
                height={"360px"}
                alt="メッセージ画像です"
              />
            </div>
          </div>
        </ScrollRevealContainer>
      </div>
    </ScrollRevealContainer>
  );
});
