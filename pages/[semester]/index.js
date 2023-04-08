import React from "react";
import { useRouter } from "next/router";

const Semester = () => {
  const router = useRouter();
  const semesterID = router.query.semester;
  console.log(semesterID);
  return <div className="text-2xl">Semester {semesterID}</div>;
};

export default Semester;
