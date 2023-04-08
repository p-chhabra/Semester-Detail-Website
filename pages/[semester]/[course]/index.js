import React from "react";
import { useRouter } from "next/router";

const Course = () => {
  const router = useRouter();
  const courseID = router.query.course;
  const semID = router.query.semester;
  return (
    <div className="text-2xl">
      Course {courseID} of Semester {semID}
    </div>
  );
};

export default Course;
