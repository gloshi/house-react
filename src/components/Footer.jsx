import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div>
          <h1>О компании</h1>
          <span>
            ООО УК «ДОМ» создано 07 июня 2022 года как управляющая
            и эксплуатирующая организация. Основная цель деятельности компании —
            обеспечение уюта и комфорта собственников.
          </span>
        </div>
        <div>
          <h1>Технический отдел “Гусино”</h1>
          <ul>
            <li>Телефон: +7 920 301-66-30</li>
            <li>Понедельник-четверг
            время работы: 08:00–16:00</li>
            <li>Пятница,
время работы: 08:00–15:00</li>
<li>Суббота, воскресенье — выходные дни</li>
<li>Перерыв: 12:00-13:00</li>
          </ul>
        </div>
        <div>
          <h1>Бухгалтерия</h1>
          <ul>
            <li>Телефон: +7 904 360-55-15</li>
            <li>Понедельник-четверг
            время работы: 08:00–16:00</li>
            <li>Пятница,
время работы: 08:00–15:00</li>
<li>Суббота, воскресенье — выходные дни</li>
<li>Перерыв: 12:00-13:00</li>
          </ul>
        </div>
        <div>
          <h1>Технический отдел “Гусино”</h1>
          <ul>
            <li>Телефон: +7 920 301-66-30</li>
            <li>Понедельник-четверг
            время работы: 08:00–16:00</li>
            <li>Пятница,
время работы: 08:00–15:00</li>
<li>Суббота, воскресенье — выходные дни</li>
<li>Перерыв: 12:00-13:00</li>
          </ul>
        </div>
      </div>
      <div className={styles.lower}>
        <h1>Диспетчерская служба</h1>
        <span>Работаем круглосуточно, без выходных +7 920 301-66-30</span>
      </div>
    </div>
  );
};

export default Footer;