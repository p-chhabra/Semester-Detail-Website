import styles from "../styles/courses.module.css";
import Link from "next/link";

const CourseCard = (props) => {
  return (
    <li className={styles.lists}>
      <div className={`${styles.step}`}>
        <div className={styles.subjectHeading}>{props.code}</div>
      </div>
      <div className={styles.container}>
        <div className={`${styles.title} ${styles.subjectName}`}>
          {props.name}
        </div>
        <div className={styles.container2}>
          <Link href={`/${props.id}/${props.courseID}`}>
            <button className={styles.button}>View More</button>
          </Link>
          <p className={styles.credits}>
            Credits : {props.credits ? props.credits : 4}
          </p>
        </div>
      </div>
    </li>
  );
};

export default CourseCard;
