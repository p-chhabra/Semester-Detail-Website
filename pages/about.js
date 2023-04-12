import React from "react";
import styles from "../styles/about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <h1 className={styles.h1}>Our Team</h1>
      <ul className={styles.body}>
        <li></li>
        <li>
          <div className={styles.person}>
            <div className={styles.container}>
              <div className={styles.containerinner}>
                <Image
                  className={styles.circle}
                  src="/im1.jpg"
                  width={500}
                  height={500}
                ></Image>
              </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.name}>
              <a href="https://www.linkedin.com/in/prathmesh-chhabra-51760719b/">
                Prathmesh Chhabra
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.person}>
            <div className={styles.container}>
              <div className={styles.containerinner}>
                <Image
                  className={styles.circle}
                  src="/im2.webp"
                  width={500}
                  height={500}
                ></Image>
              </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.name}>
              <a href="https://www.linkedin.com/in/aditya-tiwari-438087203/">
                Aditya Tiwari
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.person}>
            <div className={styles.container}>
              <div className={styles.containerinner}>
                <Image
                  className={styles.circle}
                  src="/jayant.jpeg"
                  width={500}
                  height={500}
                ></Image>
              </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.name}>
              <a href="https://www.linkedin.com/in/jayant-saini-59803123a/">
                Jayant Saini
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.person}>
            <div className={styles.container}>
              <div className={styles.containerinner}>
                <Image
                  className={styles.circle}
                  src="/im3.jpg"
                  width={500}
                  height={500}
                ></Image>
              </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.name}>
              <a href="https://www.linkedin.com/in/aaditya-gagneja-b727a0203/">
                Aaditya Gagneja
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default About;
