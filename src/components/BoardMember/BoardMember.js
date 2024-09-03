import React from 'react'
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import './BoardMember.css'


export default function BoardMember(props) {
    const { name, role, instagram, linkedin, photo, id } = props.member

    return (
        <div className='board-member'>
            <img src={photo} />
            <div className='board-member-info'>
                <span className='board-member-name'>{name}</span>
                <span className='board-member-role'>{role}</span>
                <div className='board-member-social'>
                    <a href={instagram} target='_blank'><AiFillInstagram className='board-member-icon' /></a>
                    <a href={linkedin} target='_blank'><AiFillLinkedin className='board-member-icon' /></a>
                </div>

            </div>

        </div>
    )
}
