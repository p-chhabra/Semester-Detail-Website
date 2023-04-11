import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/courses.module.css";
import CourseCard from "../../components/coursesCard";
import semData from "../../data/syllabus.json";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Distributed",
    code: "CS-311",
  },
  {
    id: 2,
    name: "Computer Networks",
    code: "CS-312",
  },
  {
    id: 3,
    name: "Sofrware Engineering",
    code: "CS-313",
  },
  {
    id: 4,
    name: "Digital Image Processing",
    code: "CS-314",
  },
  {
    id: 5,
    name: "Total Quality Management",
    code: "CS-315",
  },
];

const Semester = ({ sem }) => {
  const router = useRouter();
  const semesterID = router.query.semester;
  let i = 0;

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
                key={++i}
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
    props: { sem: semData.semesters[semID] },
  };
}
