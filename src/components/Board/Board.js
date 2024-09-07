import React from 'react'
import './Board.css'
import BoardMember from '../BoardMember/BoardMember';


export default function Board(props) {

    const data = props.boardData;

    return (

        <div className="about-container">
            <div className="about-board-container">
                <span className="about-board-container-title">Our Board</span>
                <div className="about-board-row first-row">
                    <BoardMember member={data[0]} />
                    <BoardMember member={data[1]} />
                    <BoardMember member={data[2]} />
                </div>
                <div className="about-board-row second-row">
                    <BoardMember member={data[3]} />
                    <BoardMember member={data[4]} />
                </div>
            </div>
        </div>

    )
}
