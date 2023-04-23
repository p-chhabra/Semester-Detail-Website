import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/courses.module.css";
import CourseCard from "../../components/coursesCard";
import semData from "../../data/syllabus.json";

const Semester = ({ sem }) => {
  const router = useRouter();
  const semesterID = router.query.semester;

  return (
    <div className="h-full">
      <div className={styles.body}>
        <h1 className="text-4xl text-gray-300 mt-8 mb-5 font-bold">
          Semester {semesterID}
        </h1>
        <ol className={`${styles.olCards} ${styles.alternate}`}>
          {sem.courses.map((course) => {
            return (
              <CourseCard
                key={course.courseID}
                id={semesterID}
                courseID={course.courseID}
                code={course.courseCode}
                name={course.name}
                credits={course.credits}
              ></CourseCard>
            );
          })}
          {/* kya subjectHeading */}
        </ol>
      </div>
    </div>
  );
};

export default Semester;

export async function getStaticPaths() {
  const paths = semData.semesters.map((sem) => {
    return {
      params: { semester: sem.semID.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const params = context.params;
  const semID = params.semester;
  return {
    props: { sem: semData.semesters[semID - 1] },
  };
}
