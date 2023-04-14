import React from "react";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Наши контакты</h1>
      <div className={styles.usContact}>
        <div className={styles.box}>
          <img src="/img/map-pin.svg" alt="map-pin" />
          <div>
            214000, (почтовый адрес) г. Смоленск, переулок Реадовский, д. 5
          </div>
        </div>
        <div className={styles.box}>
          <img src="/img/phone-call.svg" alt="phone-call" />
          <div>Телефон: +7 919 042-45-90, +7 950 705-95-85</div>
        </div>
        <div className={styles.box}>
          <img src="/img/mail.svg" alt="mail" />
          <div>Email - ykdom67@yandex.ru</div>
        </div>
        <h2>Технический отдел, участок Гусино</h2>
        <div className={styles.box}>
          <img src="/img/phone-call.svg" alt="phone-call" />
          <div>Телефон: +7 919 042-45-30</div>
        </div>
        <div className={styles.box}>
          <img src="/img/clockCont.svg" alt="phone-call" />
          <div>Понедельник-четверг: время работы 8:00–16:00</div>
        </div>
        <div style={{ paddingLeft: 42, paddingBottom: 5 }}>
          Пятница: время работы 8:00–15:00.
        </div>
        <div style={{ paddingLeft: 42, paddingBottom: 5 }}>
          Перерыв с 12:00 – 13:00
        </div>
        <div style={{ paddingLeft: 42, paddingBottom: 5 }}>
          Суббота, воскресенье: выходные дни.
        </div>

        <h2>Бухгалтерия</h2>
        <div className={styles.box}>
          <img src="/img/phone-call.svg" alt="phone-call" />
          <div>Телефон: +7 919 042-45-30</div>
        </div>
        <h2> Диспетчерская служба</h2>
        <div className={styles.box}>
          <img src="/img/phone-call.svg" alt="phone-call" />
          <div>Телефон: +7 919 042-45-30</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
