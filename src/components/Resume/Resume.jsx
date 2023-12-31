import RESUME from "../../../public/RESUME.pdf";
import { useState } from "react";
import { Page } from "react-pdf";
import "./Resume.css"; 

const Resume = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div id="resume" >
      <h1 className="resume" >Resume</h1>
    <div className="resume-container">
      <iframe
        title="resume"
        src={RESUME}
        width="54%"
        height="900px"
        style={{ border: "none", backgroundColor: "transparent" }}
        >
        <div pageNumber={pageNumber} />
      </iframe>
    </div>
        </div>
  );
};

export default Resume;
