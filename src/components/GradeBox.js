import React from "react";
import "./GradeBox.css";

function GradeBox(props){

    const {angle, color1, color2} = props;

    return (
        <div className="grade-box-container">
            <div className="grade-box" 
                    style={{ background : `linear-gradient(${angle}deg, ${color1}, ${color2})`
                }}></div>
        </div>
    )
}

export default GradeBox;