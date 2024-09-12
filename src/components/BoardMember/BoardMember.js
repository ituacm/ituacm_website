import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "./BoardMember.css";

export default function BoardMember(props) {
  const { name, role, instagram, linkedin, photo, id } = props.member;

  return (
    <div className="board-member">
      <img src={photo} alt={"notfound"} />
      <div className="board-member-info">
        <h1 className="board-member-name">{name}</h1>
        <h2 className="board-member-role">{role}</h2>
        <div className="board-member-social">
          <a href={instagram} target="_blank">
            <FaLink className="board-member-icon" />
          </a>
          <a href={instagram} target="_blank">
            <FaGithub className="board-member-icon" />
          </a>
          <a href={linkedin} target="_blank">
            <AiFillLinkedin className="board-member-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
