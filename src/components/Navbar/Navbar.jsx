import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <h2 href="#">Varunreddy</h2>
      </div>
      <nav>
        <div className="anchor" >
          <a href="#home" className="active">
            Home
          </a>
          <a href="#education">Education</a>
          <a href="#skills">Skillset</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
