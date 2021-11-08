import "./portfolio.scss";

import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h2 className="herotitle">Projects</h2>
      <div className="projectwrapper  ">
        <div className="projectcontainer">
          <img
            className="projectimg"
            src="https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_960_720.jpg"
            alt=""
          />
          <p class="cardtitle">E-Commerce</p>
          <div class="overlay"></div>
          <div class="demobutton">
            <a href="https://mayashopping.netlify.app/" target="_blank">
              Demo
            </a>
          </div>
        </div>
        <div class="projectcontainer">
          <img
            className="projectimg"
            src="https://www.phoneworld.com.pk/wp-content/uploads/2020/10/seo-watch-free-link-preview.jpg"
            alt=""
          />
          <p class="cardtitle">Netflix Clone</p>
          <div class="overlay"></div>
          <div class="demobutton">
            <a href="https://netflix-clone-tarun.netlify.app" target="_blank">
              {" "}
              Demo{" "}
            </a>
          </div>
        </div>
        <div class="projectcontainer">
          <img
            className="projectimg"
            src="https://proweblab.xyz/uploads/images/image_750x_5f5a87e7a3746.jpg"
            alt=""
          />
          <p class="cardtitle">Weather App</p>
          <div class="overlay"></div>
          <div class="demobutton">
            <a href="https://vayugna-weather-app.netlify.app" target="_blank">
              {" "}
              Demo{" "}
            </a>
          </div>
        </div>
        <div class="projectcontainer">
          <img
            className="projectimg"
            src="https://lh3.googleusercontent.com/I1RbMg3jgFlTkuUkq68VbmyZuWtlsmx1REHxYCGYsu_G_hNNdl0_I4IqIsGgDwqWcHg"
            alt=""
          />
          <p class="cardtitle">Galaxy Fighter</p>
          <div class="overlay"></div>
          <div class="demobutton">
            <a href="https://galaxy-fighter.netlify.app" target="_blank">
              {" "}
              Demo{" "}
            </a>
          </div>
        </div>
        <div class="projectcontainer">
          <img
            className="projectimg"
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
            alt=""
          />
          <p class="cardtitle">Job Search app</p>
          <div class="overlay"></div>
          <div class="demobutton">
            <a href="https://open-doors.netlify.app" target="_blank">
              {" "}
              Demo{" "}
            </a>
          </div>
        </div>
        <div class="projectcontainer">
          <img
            className="projectimg"
            src="https://image.freepik.com/free-vector/coming-soon-construction-illustration-design_1017-31446.jpg"
            alt=""
          />
          <p class="cardtitle">coming soon</p>
          <div class="overlay"></div>
          <div class="demobutton">
            <a href="#"> Demo </a>
          </div>
        </div>
      </div>
    </div>
  );
}
