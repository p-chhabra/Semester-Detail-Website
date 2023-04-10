import React from "react";
import styles from "../styles/semcard.module.css";
import Link from "next/link";

const SemCard = ({ id, desc }) => {
  return (
    <article>
      <div className={styles.text}>
        <h3 className={styles.h3}>🏠 Semester {id}</h3>

        <div className={styles.content}>
          <p className={styles.credits}>Total Credits : 26</p>
          <p className={styles.credits}>Total Subjects : 8</p>
        </div>
        <Link href={`./${id}`}>
          <button href="" className={styles.btn}>
            Show Courses
          </button>
        </Link>
      </div>
    </article>
  );
};

export default SemCard;
