import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Accordian from "../../../components/accordian";
import styles from "../../../styles/course.module.css";

const Course = () => {
  const router = useRouter();
  const courseID = router.query.course;
  const semID = router.query.semester;
  return (
    <Fragment>
      <h1 className="h1">{courseID}</h1>
      <p>Syllabus</p>
      <Accordian></Accordian>
      <div className={styles.collapsecontent}>
        <div className={styles.collapse} id="instagram">
          <a className="instagram" href="#instagram">
            Books
          </a>
          <div className={styles.content}>
            <div className={styles.innercontent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nobis iusto deleniti corporis alias quo a quam similique
              cupiditate pariatur aliquid, omnis, officia dicta officiis impedit
              nisi dolores ut, distinctio placeat. Magni dolores perferendis ab
              laborum in neque, non exercitationem!
            </div>
          </div>
        </div>
        <div className={styles.collapse} id="twitter">
          <a className="twitter" href="#twitter">
            Links
          </a>
          <div className={styles.content}>
            <div className={styles.innercontent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nobis iusto deleniti corporis alias quo a quam similique
              cupiditate pariatur aliquid, omnis, officia dicta officiis impedit
              nisi dolores ut, distinctio placeat. Magni dolores perferendis ab
              laborum in neque, non exercitationem!
            </div>
          </div>
        </div>
        <div className={styles.collapse} id="dribbble">
          <a className="dribbble" href="#dribbble">
            Relevance
          </a>
          <div className={styles.content}>
            <div className={styles.innercontent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nobis iusto deleniti corporis alias quo a quam similique
              cupiditate pariatur aliquid, omnis, officia dicta officiis impedit
              nisi dolores ut, distinctio placeat. Magni dolores perferendis ab
              laborum in neque, non exercitationem!
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Course;
