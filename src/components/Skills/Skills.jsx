import React from 'react'
import "./Skills.css"
import data from "../../ResumeData/data.json"

const Skills = () => {
    return (
      <div id='skills'> 
        <h1>Skillset</h1>
        <ul>
          {data.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Skills;
  