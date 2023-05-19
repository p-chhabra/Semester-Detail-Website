import React from "react";
import SemCard from "../components/SemCard";
import styles from "../styles/semcard.module.css";
import semData from "../data/syllabus.json";
import AnimatedPage from "../lib/AnimatedPage";

const index = ({ semData }) => {
  const semesters = semData.semesters.map((sem) => {
    return (
      <SemCard
        key={sem.semID}
        id={sem.semID}
        credits={sem.credits}
        subjects={sem.courses.length}
      ></SemCard>
    );
  });
  return (
    <>
      <AnimatedPage>
        <div className="text-4xl font-bold text-[#BB86FC]">Select Semester</div>
        <div className="flex flex-row justify-center min-h-screen w-full">
          <div className={styles.box}>
            <div className="w-full">
              <main className={styles.grid}>{semesters}</main>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
};

export default index;

//staticProps
export async function getStaticProps() {
  return {
    props: { semData },
  };
}
