import "./Footer.css";

import { CiInstagram } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import {
  FaCodepen,
  FaDiscord,
  FaGithubSquare,
  FaReddit,
  FaStackOverflow,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <h2>
        <i>Developed by @Varunreddy</i>
      </h2>
      <div>
        <div className="main">
          <div className="card">
            <CiInstagram />
          </div>
          <div className="card">
            <RiTwitterXFill />
          </div>
          <div className="card">
          <FaYoutube />
          </div>
          <div className="card">
            <FaCodepen />
          </div>
          <div className="card">
          <FaStackOverflow />
          </div>
          <div className="card">
            <FaDiscord />
          </div>
          <div className="card">
            <FaGithubSquare />
          </div>
          <div className="card">
            <FaTelegram />
          </div>
          <div className="card">
            <FaReddit />
          </div>
          <p className="text">
            My
            <br />
            Socials
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
