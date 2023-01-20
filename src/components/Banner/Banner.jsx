import React from 'react';
import banner from "../../Images/banner.png"
import styles from './Banner.module.scss'

function Banner() {
  return (
    <div className={styles.banner}>
        <img src={banner} alt="banner.png" />
    </div>
  )
}

export default Banner