import React from "react";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.container}>
      <h1>Наши контакты</h1>
      <div className={styles.usContact}>
        <div className={styles.box}>
          <img src="/img/map-pin.svg" alt="map-pin" />
          <span>
            214000, (почтовый адрес) г. Смоленск, переулок Реадовский, д. 5
          </span>
        </div>
        <div className={styles.box}>
          <img src="/img/phone-call.svg" alt="phone-call" />
          <span>Телефон: +7 919 042-45-90, +7 950 705-95-85</span>
        </div>
        <div className={styles.box}>
          <img src="/img/mail.svg" alt="mail" />
          <span>Email - ykdom67@yandex.ru</span>
        </div>
        <h2>Технический отдел, участок Гусино</h2>
        <div className={styles.box}>
          <img src="/img/phone-call.svg" alt="phone-call" />
          <span>Телефон: +7 919 042-45-30</span>
        </div>
        <div className={styles.box}>
          <img src="/img/clockCont.svg" alt="phone-call" />
          <span>Понедельник-четверг: время работы 8:00–16:00</span>
        </div>
        <span style={{ paddingLeft: 42, paddingBottom: 5 }}>
          Пятница: время работы 8:00–15:00.
        </span>
        <span style={{ paddingLeft: 42, paddingBottom: 5 }}>
          Перерыв с 12:00 – 13:00
        </span>
        <span style={{ paddingLeft: 42, paddingBottom: 5 }}>
          Суббота, воскресенье: выходные дни.
        </span>

        <h2>Бухгалтерия</h2>
        <div className={styles.box}>
          <img src="/img/phone-call.svg" alt="phone-call" />
          <span>Телефон: +7 919 042-45-30</span>
        </div>
        <h2> Диспетчерская служба</h2>
        <div className={styles.box}>
          <img src="/img/phone-call.svg" alt="phone-call" />
          <span>Телефон: +7 919 042-45-30</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
