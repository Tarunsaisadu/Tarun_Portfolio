import { Row } from "react-bootstrap";
import "./Testimonials.scss";

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1 className="maintitle">Skills</h1>

      <div className="skilldiv">
        <h3 className="leftsubtitle">
          <img
            className="subtitleimage"
            src="https://img.icons8.com/fluency/48/000000/programming-flag.png"
          />
          <span>Languages|frame works|libraries</span>
        </h3>
      </div>
      <div className="skillwrapper">
        <div className="skillslist">
          <div className="skillleft">
            <li>
              <h3 className="skilltitle">
                <span>
                  <img
                    className="skillimage"
                    src="https://img.icons8.com/color/48/000000/html-5--v1.png"
                  />
                </span>
                HTML 5
              </h3>
              <span class="bar">
                <span class="html"></span>
              </span>
            </li>
            <li>
              <h3 className="skilltitle">
                <span>
                  <img
                    className="skillimage"
                    src="https://img.icons8.com/color/48/000000/css3.png"
                  />
                </span>
                CSS
              </h3>
              <span class="bar">
                <span class="css"></span>
              </span>
            </li>
            <li>
              <h3 className="skilltitle">
                <span>
                  <img
                    className="skillimage"
                    src="https://img.icons8.com/color/48/000000/javascript.png"
                  />
                </span>
                JavaScript
              </h3>{" "}
              <span class="bar">
                <span class="js"></span>
              </span>
            </li>
            <li>
              <h3 className="skilltitle">
                <span>
                  <img
                    className="skillimage"
                    src="https://img.icons8.com/color/48/000000/bootstrap.png"
                  />
                </span>
                BootStrap
              </h3>{" "}
              <span class="bar">
                <span class="bs"></span>
              </span>
            </li>
            <li>
              <h3 className="skilltitle">
                <span>
                  <img
                    className="skillimage"
                    src="https://img.icons8.com/color/48/000000/react-native.png"
                  />
                </span>
                React JS
              </h3>{" "}
              <span class="bar">
                <span class="react"></span>
              </span>
            </li>
            <li>
              <h3 className="skilltitle">
                <span>
                  <img
                    className="skillimage"
                    src="https://img.icons8.com/color/48/000000/redux.png"
                  />
                </span>
                Redux
              </h3>{" "}
              <span class="bar">
                <span class="redux"></span>
              </span>
            </li>
          </div>
        </div>

        <div className="skillright">
          <div>
            <h3 className="toolssubtitle">
              <span>
                <img
                  className="subtitleimg"
                  src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-tools-construction-and-tools-kiranshastry-gradient-kiranshastry.png"
                />
              </span>
              Tools
            </h3>
            <div>
              <ul className="tools">
                <li>
                  <img className="toolimages" src="assets/git.png" alt="" />
                  <span className="caption">Git</span>
                </li>

                <li>
                  <img className="toolimages" src="assets/github.png" alt="" />
                  <span className="caption">GitHub</span>
                </li>
                <li>
                  <img className="toolimages" src="assets/postman.png" alt="" />
                  <span className="caption">Postman</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="designsubtitle">
                <span>
                  <img
                    className="subtitleimg"
                    src="https://img.icons8.com/fluency/48/000000/web-design.png"
                  />
                </span>
                Design
              </h3>
              <ul className="design">
                <li>
                  <img className="toolimages" src="assets/canva.png" alt="" />
                  <span className="caption">Canva</span>
                </li>
                <li>
                  <img className="toolimages" src="assets/figma.png" alt="" />
                  <span className="caption">Figma</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
