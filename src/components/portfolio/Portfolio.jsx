import "./portfolio.scss";
import "animate.css";
export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h2 className="herotitle">Projects</h2>
      <div className="projectwrapper  ">
        <div class="projectcontainer">
          <img
            className="projectimg"
            src="https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_960_720.jpg"
            alt=""
          />
          <p class="cardtitle">E-Commerce</p>
          <div class="overlay"></div>
          <div class="demobutton">
            <a href="https://mayashopping.netlify.app/" target="_blank">
              {" "}
              Demo{" "}
            </a>
          </div>
        </div>
        <div class="projectcontainer">
          <img
            className="projectimg"
            src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
            alt=""
          />
          <p class="cardtitle">LinkedIn Clone</p>
          <div class="overlay"></div>
          <div class="demobutton">
            <a href="#"> Demo </a>
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
            <a href="#"> Demo </a>
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

      {/* <h1 className="project-maintitle">Projects</h1>
      <div className="projectwrapper">
        <CardDeck className="project-carddeck">
          <Card className="project-cards">
            <Card.Img
              className="project-img"
              variant="top"
              src="https://cdn.pixabay.com/photo/2020/05/21/11/13/shopping-5200288_960_720.jpg"
            />
            <Card.Body>
              <h3 className="project-title">E-Commerce</h3>

              <Card.Text>
                <a href="https://mayashopping.netlify.app/">
                  <button className="projectbutton">Demo</button>
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="project-cards">
            <Card.Img
              className="project-img"
              variant="top"
              src="https://kinsta.com/de/wp-content/uploads/sites/5/2020/03/linkedin-statistiken.png"
            />
            <Card.Body>
              <h3 className="project-title">LinkedIn Clone</h3>
              <Card.Text>
                <a href="">
                  <button className="projectbutton">Demo</button>
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="project-cards">
            <Card.Img
              className="project-img"
              variant="top"
              src="https://fdn.gsmarena.com/imgroot/news/20/10/netflix-india-free-weekend/-1200/gsmarena_001.jpg"
            />
            <Card.Body>
              <h3 className="project-title">Netflix Clone</h3>
              <Card.Text>
                <a href="">
                  <button className="projectbutton">Demo</button>
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
      <img
        className="hoverImg"
        src="https://picsum.photos/300/200?image=244"
        alt=""
      />
      <button className="projectbutton">Demo</button> */}
    </div>
  );
}
