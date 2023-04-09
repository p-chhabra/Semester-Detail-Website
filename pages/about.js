import React from "react";
import styles from "../styles/about.module.css";
import Image from "next/image";

const About = () => {
  return(
    <div>
      <h1 className={styles.h1}>Our Team</h1>
      <ul className={styles.body}>
      <li>
      </li>
      <li>
      <div className={styles.person}>
      <div className={styles.container}>
        <div className={styles.containerinner}>
          <Image className={styles.circle} src="/im1.jpg" width={500} height={500}></Image>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.name}>Prathmesh Chhabra</div>
    </div>
      </li>
      <li>
      <div className={styles.person}>
      <div className={styles.container}>
        <div className={styles.containerinner}>
          <Image className={styles.circle} src="/im2.webp" width={500} height={500} ></Image>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.name}>Aditya Tiwari</div>
    </div>
      </li>
      <li>
      <div className={styles.person}>
      <div className={styles.container}>
        <div className={styles.containerinner}>
        <Image className={styles.circle} src="/im4.jpg" width={500} height={500}></Image>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.name}>Jayant Saini</div>
    </div>
      </li>
      <li>
      <div className={styles.person}>
      <div className={styles.container}>
        <div className={styles.containerinner}>
        <Image className={styles.circle} src="/im3.jpg" width={500} height={500}></Image>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.name}>Aaditya Gagenja</div>
    </div>
      </li>
    </ul>
    </div>
  )
};

export default About;
