import RESUME from "../../../public/RESUME.pdf";
import "./Resume.css"; 

const Resume = () => {

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
        <div />
      </iframe>
    </div>
        </div>
  );
};

export default Resume;
