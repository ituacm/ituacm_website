import React, { useState } from "react";
import "./CoursesPage.css";
import { useLoaderData } from "react-router-dom";
import Courses from "../../components/Courses/Courses";

function CoursesPage() {
  const [courses, setCourses] = useState(useLoaderData());
  return (
    <div className="courses-page-container">
      <Courses courses={courses} />
    </div>
  );
}

export default CoursesPage;
