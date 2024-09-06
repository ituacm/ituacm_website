import React, { useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import "./Courses.css";

function Courses({ courses }) {
  const defaultVisibleCourseCount = 8;
  const [visibleCourses, setVisibleCourses] = useState(
    defaultVisibleCourseCount
  );
  const [showMore, setShowMore] = useState(false);
  const toggleShowMoreCourses = () => {
    if (!showMore) {
      setVisibleCourses(courses.length);
    } else {
      setVisibleCourses(defaultVisibleCourseCount);
    }
    setShowMore(!showMore);
  };
  return (
    <div className="courses-container">
      <div className="courses">
        {courses
          .sort((a, b) => b.lectures[0].start - a.lectures[0].start)
          .slice(0, visibleCourses)
          .map((course, index) => {
            return (
              <div key={index} className="course">
                <CourseCard course={course} />
              </div>
            );
          })}
      </div>
      {courses.length > defaultVisibleCourseCount ? (
        <button className="primary-button" onClick={toggleShowMoreCourses}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      ) : null}
    </div>
  );
}

export default Courses;
