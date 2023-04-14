import React from 'react'
import styles from "../styles/SingleNotice.module.scss";
import { useSelector } from 'react-redux';

const Notices = () => {

  const list = useSelector(state => state.notices.list)
  console.log(list)

  return (
    <div className={styles.container}>
      {
        list?.map((el,index) => (
          <div key={el.id} className={styles.card}>
        <div className={styles.left}>
          <div className={styles.title}>{el.title}</div>
          
          <div className={styles.date}><img src="/img/clock.svg" alt="clock" /><div>{el.date}</div></div>

          <div className={styles.desc}>{el.desc}</div>
        </div>
        <div className={styles.right}>
          <img src={el.imgUrl} alt="el" />
        </div>
        
      </div> 
        )) 
      }
    </div>
  )
}

export default Notices