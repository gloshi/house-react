import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/SingleNotice.module.scss";
import { useSelector } from "react-redux";
const SingleNotice = () => {
  let { id } = useParams();
 

  const list = useSelector(state => state.notices.list[id-1])

  return (
    <main className={styles.container}>
      {
        list? <div className={styles.card}>
        <div className={styles.left}>
          <div className={styles.title}>{list?.title}</div>
          
          <div className={styles.date}><img src="/img/clock.svg" alt="clock" /><div>{list?.date}</div></div>

          <div className={styles.desc}>{list?.desc}</div>
        </div>
        <div className={styles.right}>
          <img src={list?.imgUrl} alt="el" />
        </div>
        
      </div> : 'Идет загрузка...'
      }
      
      <div className={styles.line}>
        <div></div>
      </div>
    </main>
  );
};

export default SingleNotice;
