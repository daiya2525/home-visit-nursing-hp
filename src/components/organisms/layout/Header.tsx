/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { memo, VFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import nimil from "../../../static/images/nimil.png";

import styles from "../../../styles/header/header.module.css";
import { Link } from "react-router-dom";

export const Header: VFC = memo(() => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link to="/" className={styles.siteTitle}>
          <img src={nimil} alt="タイトルロゴの画像です" />
        </Link>
        <nav className={styles.menuHeaderNav}>
          <ul className={styles.menuUl}>
            <li className={styles.menuItem}>
              <Link to="/about" className={styles.menuButton}>
                訪問看護ステーションについて
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/member" className={styles.menuButton}>
                メンバー
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/recruitment" className={styles.menuButton}>
                採用募集
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/contact" className={styles.menuButton}>
                お問合せ
              </Link>
            </li>
            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSyb7t86oGFh059p9adw3_zbdctc0JXf2b5CldU1n4uI87hdoEsM65U_vRvQ6leoyOWFBIXyuZfQYXg/pub?output=pdf">
              <img
                src="https://houkankesera.net/wp/wp-content/themes/kesera/images/mousikomi.png"
                alt="お申し込みページへのイメージロゴ画像です"
              />
            </a>
            <a
              href="https://www.instagram.com/inomotodaiya"
              target="_blank"
              rel="noopener noreferrer"
            >
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
