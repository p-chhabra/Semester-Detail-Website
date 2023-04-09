import React from "react";
import styles from "../styles/about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <h1 className={styles.h1}>Our Team</h1>
      <ul className={styles.body}>
<<<<<<< HEAD
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
            <div className={styles.name}>Prathmesh Chhabra</div>
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
            <div className={styles.name}>Aditya Tiwari</div>
          </div>
        </li>
        <li>
          <div className={styles.person}>
            <div className={styles.container}>
              <div className={styles.containerinner}>
                <Image
                  className={styles.circle}
                  src="/im4.jpg"
                  width={500}
                  height={500}
                ></Image>
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
                <Image
                  className={styles.circle}
                  src="/im3.jpg"
                  width={500}
                  height={500}
                ></Image>
              </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.name}>Aaditya Gagneja</div>
          </div>
        </li>
      </ul>
    </div>
  );
=======
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
      <div className={styles.name}><a href="https://www.linkedin.com/in/prathmesh-chhabra-51760719b/">Prathmesh Chhabra</a></div>
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
      <div className={styles.name}><a href="https://www.linkedin.com/in/aditya-tiwari-438087203/">Aditya Tiwari</a></div>
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
      <div className={styles.name}><a href="https://www.linkedin.com/in/jayant-saini-59803123a/">Jayant Saini</a></div>
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
      <div className={styles.name}><a href="https://www.linkedin.com/in/aaditya-gagneja-b727a0203/">Aaditya Gagneja</a></div>
    </div>
      </li>
    </ul>
    </div>
  )
>>>>>>> 9e93f333a0613b6c9a49404d2861512c2f4d4c1c
};

export default About;
