import React from "react";
import styles from "../styles/Payment.module.scss";

const Payment = () => {
  return (
    <section className={styles.container}>
      <div className={styles.main}>
        <div className={styles.text}>
          <h1>Оплата коммунальных услуг дистанционно</h1>
          <span>
            Напоминаем, что согласно условиям договора, вам необходимо
            своевременно производить оплату коммунальных услуг. Текущая оплата
            производится до 10 числа последующего месяца. Оплата с 15-го числа
            считается просроченной
          </span>
        </div>
        <div className={styles.family}>
          <img src="/img/family.jpg" alt="" />
        </div>
      </div>
        <div className={styles.star}>
          <img src="/img/Star.svg" alt="" />
        </div>
        <div className={styles.inputsBox}>
          <h1>Оплата коммунальных услуг</h1>
          <div className={styles.firstBox}>
            <input type="text" placeholder="Фамилия"/>
            <input type="text" placeholder="Имя"/>
            <input type="text" placeholder="Лицевой счёт"/>
          </div>
          <div className={styles.sum}>Сумма к оплате</div>
          <div className={styles.secondBox}>
          <input type="text" placeholder="0,00 rub"/>
          <button className={styles.pay}>Оплатить</button>
          </div>
          <div className={styles.agreement}>
            <form >
          <input type="checkbox"/>
            <label>Я даю согласие на обработку персональных данных, соглашаюсь с политикой конфиденциальности.</label>
            </form>
          </div>
        </div>
    </section>
  );
};

export default Payment;
