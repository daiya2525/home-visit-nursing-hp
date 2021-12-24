/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { memo, VFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

import styles from "../../../styles/header/header.module.css";

export const Header: VFC = memo(() => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <h1 className={styles.siteTitle}>
          <a className={styles.headerLogo} href="/home">
            訪問看護ステーション
          </a>
        </h1>
        <nav className={styles.menuHeaderNav}>
          <ul className={styles.menuUl}>
            <li className={styles.menuItem}>
              <a href="/home/about">訪問看護ステーションについて</a>
            </li>
            <li className={styles.menuItem}>
              <a href="/home/member">メンバー</a>
            </li>
            <li className={styles.menuItem}>
              <a href="/home/recruitment">採用募集</a>
            </li>
            <li className={styles.menuItem}>
              <a href="/home/contact">お問合せ</a>
            </li>
            <a href="#">
              <img src="https://houkankesera.net/wp/wp-content/themes/kesera/images/mousikomi.png" />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className={styles.headerIcon}
                icon={faInstagramSquare}
              />
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
});
