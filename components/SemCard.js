import React from "react";
import styles from "../styles/semcard.module.css";
import Link from "next/link";

const SemCard = ({ id, desc }) => {
  return (
    <article>
      <div className={styles.text}>
        <h3 className={styles.h3}>🏠 Semester {id}</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
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
