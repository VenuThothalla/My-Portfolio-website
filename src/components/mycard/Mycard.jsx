import "./mycard.css";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { FaGithub, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Mycard = () => {
  return (
    <div id="home" className="mycardContainer">
      <div className="wrapper">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="myPersonalCard">
        <div className="title">
          <h1>Venu Thothalla__</h1>
          <div className="title-tag">
            {/*<img src="" alt="Developer" />*/}
            <div>
              <p className="titleHead bg-yellow">{`Full - Stack Developer`}</p>
              <div className="online-logo-container">
                <a
                  href="https://github.com/VenuThothalla/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: "#000000",
                  }}
                >
                  <FaGithub className="logo" />
                </a>
                <a
                  href="https://www.linkedin.com/in/venuthothalla"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: "#0077b5",
                  }}
                >
                  <FaLinkedinIn className="logo" />
                </a>

                <a
                  href="https://leetcode.com/venu_/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#FFA500",
                  }}
                >
                  <SiLeetcode className="logo" />
                </a>
                <a
                  href="https://www.codechef.com/users/venu_yadav337"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: "#000000",
                  }}
                >
                  <SiCodechef className="logo" />
                </a>
                <a
                  href="https://leetcode.com/venu_/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: "#1877F2",
                  }}
                >
                  <FaFacebook className="logo" />
                </a>
                <a
                  href="https://www.instagram.com/___venu.t/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: "#FD1D1D",
                  }}
                >
                  <FaInstagram className="logo" />
                </a>
                <a
                  href="https://leetcode.com/venu_/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: "#1DA1F2",
                  }}
                >
                  <FaTwitter className="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="profilecard">
          <img
            className="profile-pic"
            src="https://avatars.githubusercontent.com/u/153862976?v=4"
            alt="profile"
          />
          <p>Hello..</p>
        </div>
      </div>
    </div>
  );
};

export default Mycard;
