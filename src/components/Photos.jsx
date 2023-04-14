import React from "react";
import styles from "../styles/Photos.module.scss";

const Photos = () => {
  const photos = [
    { id: 1, imgUrl: "/img/photos/Photo1.jpg" },
    { id: 2, imgUrl: "/img/photos/Photo2.png" },
    { id: 3, imgUrl: "/img/photos/Photo3.jpg" },
    { id: 4, imgUrl: "/img/photos/Photo4.jpg" },
    { id: 5, imgUrl: "/img/photos/Photo5.jpg" },
    { id: 6, imgUrl: "/img/photos/Photo6.jpg" },
    { id: 7, imgUrl: "/img/photos/Photo7.jpg" },
    { id: 8, imgUrl: "/img/photos/Photo8.jpg" },
    { id: 9, imgUrl: "/img/photos/Photo9.jpg" },
    { id: 10, imgUrl: "/img/photos/Photo10.jpg" },
    { id: 11 , imgUrl: "/img/photos/Photo11.jpg" },
    { id: 15 , imgUrl: "/img/photos/Photo15.jpg" },
    { id: 12 , imgUrl: "/img/photos/Photo12.jpg" },
    { id: 13 , imgUrl: "/img/photos/Photo13.jpg" },
    { id: 14 , imgUrl: "/img/photos/Photo14.jpg" },

  ];

  return (
    <div className={styles.container}>
      <div className={styles.box}>
      {photos.map((el) => (
        <div key={el.id} className={styles.card}>
          <img src={el.imgUrl} alt="" />
        </div>
      ))}
      </div>
    </div>
  );
};

export default Photos;
