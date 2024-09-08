import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CourseModal.css";
import { MdLocationOn } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { IoCalendarSharp } from "react-icons/io5";
import LectureCard from "../../LectureCard/LectureCard";

function CourseModal({ course }) {
  const navigate = useNavigate();
  const clearModal = () => {
    navigate({
      pathname: window.location.pathname,
    });
  };
  useEffect(() => {
    console.log(course);
  });
  return (
    <div className="course-modal-container">
      <div className="course-modal-overlay" onClick={clearModal}></div>
      <div className="course-modal-content">
        <div className="course-modal-content-left">
          <img src={course.image} className="course-modal-photo" />
        </div>
        <div className="course-modal-content-right">
          <div className="course-modal-content-right-top">
            <h1 className="course-modal-title">{course.title}</h1>
            <p className="course-modal-text">{course.content}</p>
            <div className="course-modal-lectures">
              <h2 className="course-modal-lectures-header">Lectures</h2>
              <div className="course-modal-lectures-list">
                {course.lectures.map((lecture, index) => {
                  return (
                    <div key={index} className="course-modal-lecture">
                      <LectureCard lecture={lecture} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="course-modal-right-bottom">
            <div className="course-modal-details">
              <div className="course-modal-detail-section">
                <IoCalendarSharp className="course-modal-icon" />
                <p>{course.start.toDateString()}</p>
              </div>
              <div className="course-modal-detail-section">
                <FaRegClock className="course-modal-icon" />
                {course.start.getMinutes() % 10 == 0 ? (
                  <p>
                    {course.start.getHours() +
                      ":" +
                      "0" +
                      course.start.getMinutes()}
                  </p>
                ) : (
                  <p>
                    {course.start.getHours() + ":" + course.start.getMinutes()}
                  </p>
                )}
              </div>
            </div>
            <div className="attend-course-button">
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/1w4bAkhqatXXPSXyMjv_jzYFv9eZU2h0hLvLjhFA2yVc/viewform?edit_requested=true"
                className="primary-button attend-course-link"
              >
                Attend this course
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseModal;
