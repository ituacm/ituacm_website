import React, { useState } from "react";
import "./CourseCard.css";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoCalendarSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import LectureCard from "../LectureCard/LectureCard";

function CourseCard({ course }) {
  // const [selectedLecture, setSelectedLecture] = useState(0);
  // const handleNextLecture = () => {
  //   if (selectedLecture == course.lectures.length - 1) {
  //     return;
  //   }
  //   setSelectedLecture(selectedLecture + 1);
  // };
  // const handlePrevLecture = () => {
  //   if (selectedLecture == 0) {
  //     return;
  //   }
  //   setSelectedLecture(selectedLecture - 1);
  // };
  return (
    <div className="course-card-container">
      <img src={course.image} className="course-card-image" />
      <div className="course-card-right">
        <div className="course-card-content">
          <div className="course-card-content-top">
            <h1 className="course-card-title">{course.title}</h1>
            <p className="course-card-description">{course.content}</p>
          </div>

          <div className="course-card-detail-sections">
            <div className="course-card-detail-section">
              <LiaChalkboardTeacherSolid className="course-card-icon" />
              <p>
                {course.lectures.length +
                  " lessons, " +
                  course.lectures.length / 2 +
                  " weeks"}
              </p>
            </div>
            <div className="course-card-detail-section">
              <IoCalendarSharp className="course-card-icon" />
              <p>
                {"Starting date: " + course.lectures[0].start.toDateString()}
              </p>
            </div>
          </div>
        </div>
        {/* <LectureCard
          lecture={course.lectures[selectedLecture]}
          handleNextLecture={handleNextLecture}
          handlePrevLecture={handlePrevLecture}
          lecturesCount={course.lectures.length}
        /> */}
        <button className="primary-button course-card-see-details-button">
          See details
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
