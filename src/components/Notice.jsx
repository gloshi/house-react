import React from "react";
import styles from "../styles/Notice.module.scss";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Notice = () => {
  const { list } = useSelector(({ notices }) => notices);

  return (
    <div className={styles.container}>
      <div className={styles.noticeTitle}>
        <h1>Объявления</h1>
        <div>
          Вся важная и актуальная информация публикуется на официальном сайте
          компании! Не верьте сторонним источникам.
        </div>
      </div>
      <div className={styles.box}>
        {list?.map((el) => (
          <Link key={el.id} to={`/notice/${el.id}`}>
            <div className={styles.card}>
              <img
                src={el.imgUrl}
                alt="el"
              />
              <div className={styles.date}>{el.date}</div>
              <div className={styles.title}>{el.title}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.links}>
        <div className={styles.jkh}>
          <img className={styles.img} src="/img/jkh.jpg" alt="jkh" />
          <img className={styles.mask} src="/img/Mask.svg" alt="Mask" />
          <div className={styles.jkhTitle}>АКТУАЛЬНЫЕ ТАРИФЫ ЖКХ</div>
          <div className={styles.linksLine}></div>
          <div className={styles.desc}>
            Тарифы на жилищно-коммунальные услуги для населения города Смоленск
            на 2023г.
          </div>
        </div>
        <div className={styles.reviews}>
          <img className={styles.img} src="/img/rewies.jpg" alt="jkh" />
          <img className={styles.mask} src="/img/Mask.svg" alt="Mask" />
          <div className={styles.reviewsTitle}>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</div>
          <div className={styles.linksLine}></div>
          <div className={styles.desc}>
            Отзывы наших клиентов. Здесь вы можете узнать всё о нашей компании.
          </div>
        </div>
      </div>
      <div className={styles.noticeLine}></div>
      <div className={styles.parent}>
        <div className={styles.arrow}>
          <img onClick={()=> window.scrollTo(0,0)} src="/img/Arrow.svg" alt="Arrow" />
        </div>
      </div>
    </div>
  );
};

export default Notice;
