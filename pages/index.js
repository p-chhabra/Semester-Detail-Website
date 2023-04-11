import React from "react";
import SemCard from "../components/SemCard";
import styles from "../styles/semcard.module.css";
import semData from "../data/syllabus.json";

const dummyData = [
  { sem: 1, desc: "" },
  { sem: 2, desc: "" },
  { sem: 3, desc: "" },
  { sem: 4, desc: "" },
  { sem: 5, desc: "" },
  { sem: 6, desc: "" },
  { sem: 7, desc: "" },
  { sem: 8, desc: "" },
];

const index = () => {
  return (
    <>
      <div className="text-2xl">Home Page</div>
      <div className="flex flex-row justify-center min-h-screen w-full">
        <div className={styles.box}>
          <div className="w-full">
            <main className={styles.grid}>
              {dummyData.map((data) => {
                return (
                  <SemCard
                    key={data.sem}
                    id={data.sem}
                    desc={data.desc}
                  ></SemCard>
                );
              })}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

export async function getStaticProps() {
  console.log(semData);
  return {
    props: { semData },
  };
}
