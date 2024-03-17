import "./certificate.css";
import logo from "./Salesforce.jpg";
import pythonC from "./Certificate-Python.jpg";
import AccentureC from "./Accenture-certificate.jpg";
import sqlC from "./sql-hackerRank.jpg";
import jpmorgan from "./jpmorgan.jpg";

const Certificate = () => {
  return (
    <div id="certificate" className="c-continer">
      <div className="cerContainer">
        <div className="c-head">
          <h1>CHECK OUT SOME OF MY CERTIFICATIONS.</h1>
          <div className="bar2c"></div>
        </div>
        <div className="certicareList">
          <a
            href="https://smartinternz.com/internships/salesforce_certificates/b2fc19323fe826741d0448e2eaaf703d"
            target="_blank"
          >
            <img src={logo} alt="img" />
          </a>
          <a href="https://coursera.org/verify/9PXUGHJFY6ZV" target="_blank">
            <img src={pythonC} alt="img" />
          </a>
          <a
            href="https://drive.google.com/file/d/1oNyA42DhYmHIvK6KZmaD83F-7vv3oDwo/view?usp=sharing"
            target="_blank"
          >
            <img src={AccentureC} alt="img" />
          </a>

          <a
            href="https://www.hackerrank.com/certificates/7d1f5f800851"
            target="_blank"
          >
            <img src={sqlC} alt="img" />
          </a>

          <a
            href="https://drive.google.com/file/d/1YisEc5e0Z8GIlvbwcCS2MCA0DnaqYytm/view?usp=sharing"
            target="_blank"
          >
            <img src={jpmorgan} alt="img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
