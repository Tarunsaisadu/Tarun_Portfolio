import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 4500,
      backSpeed: 60,
      showCursor: true,
      strings: ["rontend Developer"],
    });
  }, []);

  return (
    <div className="intro css-selector" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/Tarun_potrait.jpeg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <Fade left cascade>
            <h2>
              Hello there! 👋 I'm {""}
              <span className="myname">
                <strong style={{ color: "#90e0ef" }}>TARUN SADU</strong>
              </span>
            </h2>
          </Fade>
          <h3>
            F<span ref={textRef}></span>
          </h3>
          <Fade left cascade>
            <p>
              I enjoy building interactive websites. If you are an employer
              looking to hire, you can get in touch with me.
            </p>
          </Fade>
        </div>

        <div className="socialiconcontainer">
          <ul className="iconslist">
            <Fade left cascade>
              <li>
                <a href="https://www.linkedin.com/in/sadu/" target="_blank">
                  <img src="https://img.icons8.com/nolan/48/linkedin.png" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Tarunsaisadu" target="_blank">
                  <img src="https://img.icons8.com/nolan/48/github.png" />
                </a>
              </li>
            </Fade>
            <a className="firstatt" href="assets/Tarun_CV.pdf" target="_blank">
              <button className="resumebutton">Resume</button>
            </a>
          </ul>
        </div>

        <a className="secondatt" href="#portfolio">
          <button className="first">view my work</button>
        </a>
      </div>
    </div>
  );
}
