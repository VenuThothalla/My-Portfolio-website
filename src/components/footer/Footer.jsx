import "./footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footer-container">
      <h2> Thankyou </h2>
      <div className="footeritem">
        <div className="footerlink">
          <a
            href="https://www.linkedin.com/in/venuthothalla/"
            target="_blank"
            rel="noreferrer"
          >
            <p>LINKEDIN</p>
          </a>
          <a
            href="https://github.com/venuthothalla"
            target="_blank"
            rel="noreferrer"
          >
            <p>GITHUB</p>
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <p>HASHNODE</p>
          </a>
        </div>
        <p>Venu Thothalla</p>
        <div className="bar1-f"></div>
      </div>
    </div>
  );
};

export default Footer;
