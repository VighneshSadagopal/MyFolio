import React from "react";
import "./Skill.css";

export default function Skill(props) {
  return (
    <>
      <div className="fourth-container">
        <h3>{props.skillname}</h3>
        <div className="skill-contain">
          <div className={"skillset"} style={{ width: props.skillno }}>
            {props.skillno}
          </div>
        </div>
      </div>
    </>
  );
}
