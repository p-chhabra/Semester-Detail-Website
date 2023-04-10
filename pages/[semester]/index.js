import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/courses.module.css";
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
];

const Semester = () => {
  const router = useRouter();
  const semesterID = router.query.semester;
  console.log(semesterID);
  return (
    <div className="h-screen">
      <div className={styles.body}>
        <h1 className="text-4xl text-gray-300 mt-8 mb-5 font-bold">
          Semester {semesterID}
        </h1>
        <ol className={`${styles.olCards} ${styles.alternate}`}>
          {/* kya subjectHeading */}
          {DUMMY_DATA.map((data) => {
            return (
              <CourseCard
                key={data.code}
                code={data.code}
                name={data.name}
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

// style="--ol-cards-color-accent:#00a560"
// style="--ol-cards-color-accent:#0166b4"
// style="--ol-cards-color-accent:#582c8b"
// style="--ol-cards-color-accent:#ed1c24"
// style="--ol-cards-color-accent:#f68121"
