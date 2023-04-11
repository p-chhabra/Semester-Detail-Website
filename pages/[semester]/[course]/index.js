import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Accordian from "../../../components/accordian";
import styles from "../../../styles/course.module.css";
import semData from "../../../data/syllabus.json";

const Course = ({ course }) => {
  const router = useRouter();
  const courseID = router.query.course;
  const semID = router.query.semester;
  const unitArr = semData.semesters[semID].courses[courseID].units;
  return (
    <Fragment>
      <h1 className="h1">Ada</h1>
      <h2 className="h2">Syllabus</h2>
      <div className="h-full"><div className="wrap">
      <div className="flex flex-row justify-center items-center">
        <div className="tabs">
        {unitArr.map((unit)=>{
          return <Accordian item={unit.unitID}/>
        })}

          </div>
          </div>
          </div>

        
        <div className={styles.collapsecontent}>
          <div className={styles.collapse} id="instagram">
            <a className="instagram" href="#instagram">
              Books
            </a>
            <div className={styles.content}>
              <div className={styles.innercontent}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                nobis iusto deleniti corporis alias quo a quam similique
                cupiditate pariatur aliquid, omnis, officia dicta officiis
                impedit nisi dolores ut, distinctio placeat. Magni dolores
                perferendis ab laborum in neque, non exercitationem!
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
                cupiditate pariatur aliquid, omnis, officia dicta officiis
                impedit nisi dolores ut, distinctio placeat. Magni dolores
                perferendis ab laborum in neque, non exercitationem!
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
                cupiditate pariatur aliquid, omnis, officia dicta officiis
                impedit nisi dolores ut, distinctio placeat. Magni dolores
                perferendis ab laborum in neque, non exercitationem!
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Course;

export async function getStaticPaths(context) {
  console.log(context);
  // const paths = semData.semesters[semID].courses.map((course) => {
  //   return {
  //     params: {
  //       course: course.courseID.toString(),
  //     },
  //   };
  // });
  return {
    paths: [{ params: { semester: "1", course: "1" } }],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const semID = context.params.semester;
  const courseID = context.params.course;
  return {
    props: { course: semData.semesters[semID].courses[courseID] },
  };
}
