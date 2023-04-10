import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/courses.module.css"
import CourseCard from "../../components/coursesCard";

const DUMMY_DATA = [
  {
    name: "Distributed",
    code: "CS-311",
  },
  {
    name: "Computer Networks",
    code: "CS-312",
  },
  {
    name: "Sofrware Engineering",
    code: "CS-313",
  },
  {
    name: "Digital Image Processing",
    code: "CS-314",
  },
  {
    name: "Total Quality Management",
    code: "CS-315",
  },
]

const Semester = () => {
  const router = useRouter();
  const semesterID = router.query.semester;
  console.log(semesterID);
  return (
    <React.Fragment>
      <div className="text-2xl">Semester {semesterID}</div>
      <div className={styles.body}>
        <h1>Courses</h1>
        <ol className={`${styles.olCards} ${styles.alternate}`} >
          {/* kya subjectHeading */}
          {DUMMY_DATA.map(data => {
            return <CourseCard key={data.code} code={data.code} name={data.name}></CourseCard>
          })}
          {/* kya subjectHeading */}
        </ol>
      </div>
    </React.Fragment>
  );
};

export default Semester;

// style="--ol-cards-color-accent:#00a560"
// style="--ol-cards-color-accent:#0166b4"
// style="--ol-cards-color-accent:#582c8b"
// style="--ol-cards-color-accent:#ed1c24"
// style="--ol-cards-color-accent:#f68121"
