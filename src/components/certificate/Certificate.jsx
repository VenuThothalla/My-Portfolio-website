import "./certificate.css";
import logo from "./Salesforce.jpg";
import pythonC from "./Certificate-Python.jpg";
import AccentureC from "./Accenture-certificate.jpg";
import sqlC from "./sql-hackerRank.jpg";
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
            href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20Nordics/PxenP4rHNE6Bh4nQz_Accenture%20Nordics_Sh9uhBaQgioF4Cs2C_1701428897109_completion_certificate.pdf"
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
        </div>
      </div>
    </div>
  );
};

export default Certificate;
