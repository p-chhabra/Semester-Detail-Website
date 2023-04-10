import styles from "../styles/courses.module.css"

const CourseCard = (props) => {
    return (
        <li className={styles.lists}>
            <div className={`${styles.step}`}>
                <div className={styles.subjectHeading}>
                    {props.code}
                </div>
            </div>
            <div className={styles.container}>
                <div className={`${styles.title} ${styles.subjectName}`}>{props.name}</div>
                <div className={styles.container2}>

                    <button className={styles.button}>View More</button>
                    <p className={styles.credits}>Credits : 4</p>
                </div>
            </div>
        </li>
    )
}

export default CourseCard