import React from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

export default function Modal({ content }) {
  const navigate = useNavigate();
  const clearModal = () => {
    navigate({
      pathname: window.location.pathname,
    });
  };

  return (
    <div className="modal-container">
      <div className="modal-overlay" onClick={clearModal}></div>
      <div className="modal-content">{content.title}</div>
    </div>
  );
}
