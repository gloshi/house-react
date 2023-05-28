import React from "react";
import styles from "../styles/Stand.module.scss";

const Stand = () => {
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h1>Уважаемые жители!</h1>
        <div>
          Аварийная Диспетчерская служба ООО УК «Дом» работает круглосуточно,
          без выходных, телефон - +7 920 317-21-41
        </div>
      </div>
      <div className={styles.services}>
        <h1>Сервис для потребителей</h1>
        <div>
          С помощью сайта вы можете передать показания электросчётчика,
          связаться с управляющей компанией, написать обращение, оставить отзыв.
          Это удобно и современно!
        </div>
      </div>
      <div className={styles.iconsServices}>
        <div className={styles.typeServices}>
          <img src="/img/Fire.svg" alt="fire" />
          <h1>Передать показания</h1>
          <span>
            Показания принимаются с 23 по 25 число каждого месяца.Просим
            ежемесячно передавать показания
          </span>
          <div className={styles.more}>Подробнее</div>
        </div>
        <div className={styles.typeServices}>
          <img src="/img/Application.svg" alt="Application" />
          <h1>Заявка в УК</h1>
          <span>
            Вы всегда можете обратиться к нам. Постараемся быстро помочь!
            Мы стараемся максимально помочь
          </span>
          <div className={styles.more}>Подробнее</div>
        </div>
        <div className={styles.typeServices}>
          <img src="/img/clients.svg" alt="clients" />
          <h1>Отзывы клиентов</h1>
          <span>
            Будем рады услышать от вас отзывы о нашей деятельности. Обращаем
            ваше внимание, отзывы о…
          </span>
          <div className={styles.more}>Подробнее</div>
        </div>
        <div className={styles.typeServices}>
          <img src="/img/Heart.svg" alt="heart" />
          <h1>О нас</h1>
          <span>
            ООО УК «Дом» создано 07 июня 2022 года как управляющая
            и эксплуатирующая организация…
          </span>
          <div className={styles.more}>Подробнее</div>
        </div>
      </div>
      <div className={styles.infoStand}>
        <h1>Информационный стенд</h1>
        <div className={styles.infoIcons}>
          <div className={styles.params}>
            <img src="/img/fond.svg" alt="fond" />
            <div className={styles.infoTitle}>Жилищный фонд</div>
            <div className={styles.infoDesc}>
              Управляющая компания ООО УК «Дом» обслуживает огромное количество
              многоквартирных домов. Адрес, год постройки и площадь указаны
              в таблице.
            </div>
          </div>
          <div className={styles.params}>
            <img src="/img/docs.svg" alt="docs" />
            <div className={styles.infoTitle}>Нормативные документы</div>
            <div className={styles.infoDesc}>
              Актуальные нормативно-правовые акты, регулирующие
              жилищныеправоотношения. Является основным источником жилищного
              права.
            </div>
          </div>
          <div className={styles.params}>
            <img  src="/img/plan.svg" alt="plan" />
            <div className={styles.infoTitle}>Отчётность</div>
            <div className={styles.infoDesc}>
              Лицензия № 038, годовой отчёт управляющей компании.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.borderLine}>
      </div>
    </section>
  );
};

export default Stand;
