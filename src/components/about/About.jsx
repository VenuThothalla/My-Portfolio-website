import "./about.css";

const About = () => {
  return (
    <div className="aboutcontainer" id="about">
      <div className="partContainer">
        <div className="partleft">
          <h1>ABOUT ME</h1>
          <div className="bar1"></div>
        </div>
        <div className="partrightAbout">
          <p>
            Hello, My name is Venu, I have completed my Bchelors of technology
            from JNTUH, My skills includes Python Java SQL and javascript for
            backend development and HTML, CSS, JavaScript and React for
            front-end development, I have done many project by using these
            skkills, So, I am well Good in Full-Stack Development. For computer
            science fundamentals, I have a decent knowledge about Data Structure
            & Algorithm, Operating system, Database management system and Object
            Oriented Technique. I have also practiced coding by solving problems
            on various coding platforms like Leetcode, GFG and Hackerrank
          </p>
          <a
            href="https://drive.google.com/file/d/1I3kaQIuz1UTi3zRfXyg73sK_WKzz3Wkf/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
