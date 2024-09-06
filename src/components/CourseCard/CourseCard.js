import React from "react";
import "./CourseCard.css";
import { FaChalkboardTeacher } from "react-icons/fa";

function CourseCard({ course }) {
  return (
    <div className="course-card-container">
      <img src={course.image} className="course-card-image" />
      <div className="course-card-content">
        <h1 className="course-card-title">{course.title}</h1>
        <p className="course-card-description">{course.description}</p>
        <div className="course-card-detail-section">
          <FaChalkboardTeacher className="course-card-icon" />
          <p>{course.lectures.length + " lessons"}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
