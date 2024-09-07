import React, { useEffect, useState } from "react";
import "./CoursesPage.css";
import { useLoaderData } from "react-router-dom";
import Courses from "../../components/Courses/Courses";

function CoursesPage() {
  const [courses, setCourses] = useState(useLoaderData());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="courses-page-container">
      <Courses courses={courses} />
    </div>
  );
}

export default CoursesPage;
