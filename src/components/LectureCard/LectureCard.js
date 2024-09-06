import React from "react";
import "./LectureCard.css";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { IoCalendarSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";

function LectureCard({
  lecture,
  handleNextLecture,
  handlePrevLecture,
  lecturesCount,
}) {
  return (
    <div className="lecture-card-container">
      <MdNavigateBefore
        className={`select-lecture-button ${
          lecture.lectureNumber == 1 ? "inactive-button" : null
        }`}
        onClick={handlePrevLecture}
      />
      <div className="lecture">
        <h2 className="lecture-number">{"Lecture " + lecture.lectureNumber}</h2>
        <h2 className="lecture-subject">{lecture.subject}</h2>
        <div className="lecture-detail-section">
          <IoCalendarSharp className="course-card-icon" />
          <p>{lecture.start.toDateString()}</p>
        </div>
        <div className="lecture-detail-section">
          <FaRegClock className="lecture-icon" />
          <p>{(lecture.end - lecture.start) / (1000 * 60 * 60) + " hours"}</p>
        </div>
      </div>
      <MdNavigateNext
        className={`select-lecture-button ${
          lecture.lectureNumber == lecturesCount ? "inactive-button" : null
        }`}
        onClick={handleNextLecture}
      />
    </div>
  );
}

export default LectureCard;
