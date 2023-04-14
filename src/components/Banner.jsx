import React, { useState } from "react";
import styles from "../styles/Banner.module.scss";


const Banner = () => {
  const arr = [
    {
      id: 1,
      title: "slider1",
      subTitle: "Lorem",
    },
    {
      id: 2,
      title: "slider2",
      subTitle: "Lorem",
    },
    {
      id: 3,
      title: "slider3",
      subTitle: "Lorem",
    },
  ];

  const [isActive, setIsActive] = useState(true);
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if(slideIndex !== arr.length){
      setSlideIndex(slideIndex + 1)
  } 
  else if (slideIndex === arr.length){
      setSlideIndex(1)
  }
  };
  const prevSlide = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1)
  } 
  else if (slideIndex === 1){
      setSlideIndex(arr.length)
  }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        {arr.map((el, index) => (
          <img
            key={el.id}
            className={
              slideIndex === index + 1 ? styles.slideActive : styles.slide
            }
            src={`/img/sliderImg/slider${index + 1}.jpg`}
            alt="banner"
          />
        ))}
      </div>
      <button onClick={()=>prevSlide()} className={styles.prev}><img src="/img/sliderImg/left-arrow.svg" alt="" /></button>
      <button  onClick={()=>nextSlide()} className={styles.next}><img src="/img/sliderImg/right-arrow.svg" alt="" /></button>
      <div className={styles.bannerText}>
        <h1>Управляющая компания ООО УК «Дом»</h1>
        <div>
          Наша задача — оказание профессиональной помощи собственникам
          и нанимателям жилья в создании комфортных и безопасных условий
          проживания в многоквартирных домах.
        </div>
      </div>
      <div className={styles.bannerBtn}>
        <div>Наши дома</div>
      </div>
      <div className={styles.about}>
        <div>
          Основная цель деятельности Компании — обеспечение уюта и комфорта
          собственников на территории, поддержание сохранности, чистоты
          и порядка, а так же оперативное решение проблем собственников,
          устранение их замечаний и рассмотрение предложений по повышению
          качества обслуживания.
        </div>
      </div>
      <div className={styles.line}>
        <div></div>
        {Array.from({ length: 3 }).map((item, index) => (
          <button
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? styles.dotActive : styles.dot}
          ></button>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
