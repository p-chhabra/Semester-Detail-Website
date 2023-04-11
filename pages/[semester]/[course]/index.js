import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Accordian from "../../../components/accordian";
import styles from "../../../styles/course.module.css";
import semData from "../../../data/syllabus.json";

const Course = ({ course }) => {
  const router = useRouter();
  const courseID = router.query.course;
  const semID = router.query.semester;
  const unitArr = course.units;
  const experiments = course.experiments;
  let i = 0;
  return (
    <Fragment>
      {<h1 className="h1">{course.name}</h1>}
      <h2 className="h2">Syllabus</h2>
      {unitArr && (
        <div className="h-full">
          <div className="wrap">
            <div className="flex flex-row justify-center items-center">
              <div className="tabs">
                {unitArr.map((unit) => {
                  return (
                    <Accordian
                      key={unit.unitID}
                      item={unit.unitID}
                      name={unit.name}
                      topics={unit.topics}
                    />
                  );
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
                  <div className="text-white flex flex-col space-y-6">
                    {course.books.map((book) => {
                      return (
                        <p key={++i} className="mt-4 mb-4">
                          {book.name}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.collapse} id="twitter">
              <a className="twitter" href="#twitter">
                Source
              </a>
              <div className={styles.content}>
                <div className={styles.innercontent}>
                  <p>
                    <span className="text-xl">Youtube:</span>{" "}
                    {course.sources[0].source}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.collapse} id="dribbble">
              <a className="dribbble" href="#dribbble">
                Relevance
              </a>
              <div className={styles.content}>
                <div className={styles.innercontent}>
                  <div className="text-white flex flex-col space-y-6">
                    <p>Placement: {course.relevance.placement}/5</p>
                    <p>Compitetive: {course.relevance.compitetive}/5</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.collapse} id="youtube">
              <a className="youtube" href="#youtube">
                Stats
              </a>
              <div className={styles.content}>
                <div className={styles.innercontent}>
                  <div className="text-white flex flex-col space-y-6">
                    Average SGPI: {course.meanSG}
                    <br />
                    <br />
                    Median SGPI: {course.medianSG}
                    <br />
                    <br />
                    Highest SGPI: {course.maxSG}
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {experiments && (
        <>
          <div className="flex flex-row justify-center">
            <div className="flex flex-col bg-[#736b6b38] w-[1000px] rounded-lg p-10">
              <h1 className="text-4xl mb-10">List of Experiments</h1>
              {experiments.map((exp) => {
                return (
                  <p className="m-3" key={++i}>
                    {exp}
                  </p>
                );
              })}
            </div>
          </div>
          <div className={styles.collapsecontent}>
            <div className={styles.collapse} id="instagram">
              <a className="instagram" href="#instagram">
                Stats
              </a>
              <div className={styles.content}>
                <div className={styles.innercontent}>
                  <div className="text-white flex flex-col space-y-6">
                    Average SGPI: {course.meanSG}
                    <br />
                    <br />
                    Median SGPI: {course.medianSG}
                    <br />
                    <br />
                    Highest SGPI: {course.maxSG}
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
};

export default Course;

export async function getStaticPaths() {
  const sems = semData.semesters;

  const paths = [];
  sems.forEach((sem) => {
    let semID = sem.semID;
    sem.courses.forEach((course) => {
      paths.push({
        params: {
          semester: semID.toString(),
          course: course.courseID.toString(),
        },
      });
    });
  });
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const semID = context.params.semester;
  const courseID = context.params.course;
  return {
    props: { course: semData.semesters[semID - 1].courses[courseID - 1] },
  };
}
