/* eslint-disable jsx-a11y/anchor-is-valid */
import { memo, VFC } from "react";

import "../../../styles/header/header.module.css";

export const Footer: VFC = memo(() => {
  return (
    <footer>
      <div className="header-inner">
        <h1 className="site-title">
          <a className="header-logo" href="/home">
            訪問看護ステーション
          </a>
        </h1>
        <nav className="menu-header-nav">
          <ul className="menu-ul">
            <li className="menu-item">
              <a href="/home/about">訪問看護ステーションについて</a>
            </li>
            <li className="menu-item">
              <a href="/home/member">メンバー</a>
            </li>
            <li className="menu-item">
              <a href="/home/recruitment">採用募集</a>
            </li>
            <li className="menu-item">
              <a href="/home/contact">お問合せ</a>
            </li>
            <button className="pdf-btn">PDF</button>
            <button className="sns-btn"> SNS</button>
          </ul>
        </nav>
      </div>
    </footer>
  );
});
