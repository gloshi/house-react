import React from "react";
import styles from "../styles/NavBar.module.scss";
import { Link } from "react-router-dom";
import { ROUTE } from "../utils/routes";

import logo from "../importImages/logo.svg";
import search from "../importImages/search.svg";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to={ROUTE.HOME}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.tags}>
        <ul>
          <Link to={ROUTE.HOME}>
            <li>Главная</li>
          </Link>
          <Link to={ROUTE.NOTICES}>
            <li>Объявления</li>
          </Link>
          <Link to={ROUTE.PHOTOS}>
            <li>Фотоальбом</li>
          </Link>
          <Link to={ROUTE.CONTRACT}>
            <li>Прямые договоры</li>
          </Link>
          <Link to={ROUTE.PAYMENT}>
            <li>Оплата коммунальных услуг</li>
          </Link>
          <Link to={ROUTE.ANSWERS}>
            <li>Ответы на вопросы</li>
          </Link>
          <Link to={ROUTE.CONTACTS}>
            <li>Контакты</li>
          </Link>
        </ul>
      </div>
      <div className={styles.search}>
        <img src={search} alt="logo" />
      </div>
    </div>
  );
};

export default NavBar;
