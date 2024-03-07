import "./education.css";

const Eduction = () => {
  return (
    <div id="education" className="edu-container">
      <div className="partContainer">
        <div className="partleft">
          <h1>EDUCATION</h1>
          <div className="bar1"></div>
        </div>
        <div className="partright">
          <h2>Jawaharlal Nehru Technological University</h2>
          <h3>Bachelor of Technology • SEP 2022</h3>
          <h4 className="cw-title">CourseWork.</h4>
          <div className="cousework-c">
            <h5>Data Structure & Algorithm</h5>
            <h5>Operating System</h5>
            <h5>Database Management System</h5>
            <h5>Object Oriented Technique</h5>
            <h5>Computer Networking</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eduction;
