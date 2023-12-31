import React from "react";
import data from "../../ResumeData/data.json";
import "./Education.css";

const Education = () => {
  return (
    <div id="education" className="education-container">
      <h1>Education</h1>
      <ul className="education-block">
        {data.education.map((education, index) => (
          <li key={index} className="education-card">
            <div>
              <h3>{education.qualification}</h3>
              <h4>{education.college}</h4>
            </div>
            <div>
              <h3 className="education-date">{education.yearOfPassing}</h3>
              <h3>{education.score}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
