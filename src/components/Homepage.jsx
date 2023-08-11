import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <>
      {/* First Seen by user */}
      <div className="container-home">
        <div className="container-img">
          <div className="homepage-title">
            {/* START the inside of the big picture */}
            <div className="container-title">
              <h1 className="title">
                Build and Empower your Vision with Cloud Horizon's Cutting-Edge
                Solutions
              </h1>
              <h4 className="description">
                Empower Your Creations with Cloud Horizon: Elevate your projects
                with limitless computing, storage, and more. Develop with ease
                and scale with confidence for ultimate success.
              </h4>
            </div>
            <div>
              <button className="btn-get-started">Get Started for Free</button>
            </div>
          </div>
          {/* END the inside of the big picture */}
        </div>
      </div>
      {/* Partnership  */}
      <div className="partnership-container">
        <h3 className="partnership-header">Partnerships</h3>
        <div className="partnership-logos-container">
          <div className="parnership1"></div>
          <div className="parnership2"></div>
          <div className="parnership3"></div>
          <div className="parnership4"></div>
          <div className="parnership5"></div>
        </div>
      </div>
      {/* Articles start*/}
      <div className="articles-container">
        {/* Article 1 start */}
        <div className="article">
          {/* Article description start */}
          <div className="article-description">
            <h2 className="description-header">Feature</h2>
            <div className="description-details">
              <h4>
                Do consectetur proident proident id eiusmod deserunt consequat
                pariatur ad ex velit do Lorem reprehenderit.
              </h4>
            </div>
            <div className="description-btns-container">
              <button className="try-now">Try Now</button>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
          {/* Article description end */}
          {/* Article image start */}
          <div className="article-img-description-container article1-img-description-container">
            <div
              className="article-img"
              style={{
                backgroundImage: `url("/src/assets/images/article1.png")`,
              }}
            ></div>
          </div>
          {/* Article image end */}
        </div>
        <div className="article">
          <div className="article-img-description-container article2-img-description-container">
            <div
              className="article-img"
              style={{
                backgroundImage: `url("/src/assets/images/article2.png")`,
              }}
            ></div>
          </div>
          <div className="article-description">
            <h2 className="description-header">Feature</h2>
            <div className="description-details">
              <h4>
                Do consectetur proident proident id eiusmod deserunt consequat
                pariatur ad ex velit do Lorem reprehenderit.
              </h4>
            </div>
            <div className="description-btns-container">
              <button className="try-now">Try Now</button>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
        </div>
        <div className="article">
          {/* Article description start */}
          <div className="article-description">
            <h2 className="description-header">Feature</h2>
            <div className="description-details">
              <h4>
                Do consectetur proident proident id eiusmod deserunt consequat
                pariatur ad ex velit do Lorem reprehenderit.
              </h4>
            </div>
            <div className="description-btns-container">
              <button className="try-now">Try Now</button>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
          {/* Article description end */}
          {/* Article image start */}
          <div className="article-img-description-container article3-img-description-container">
            <div
              className="article-img"
              style={{
                backgroundImage: `url("/src/assets/images/article3.png")`,
              }}
            ></div>
          </div>
        </div>
        {/* Articles start*/}
      </div>
      {/* Get Started start*/}
      <div className="get-started-container">
        <div className="get-started-description-container">
          <h2 className="get-started-header">Get Started!</h2>
          <h4 className="get-started-details">
            Do consectetur proident proident id eiusmod deserunt consequat
            pariatur ad ex velit do Lorem reprehenderit.
          </h4>
          <button className="get-started-btn">Sign up now</button>
        </div>
        <div className="get-started-img-container">
          <div className="get-started-image"></div>
        </div>
      </div>
      {/* Get Started end*/}
      {/* latest update start */}
      <div className="update-container">
        <div className="update-description">
          <h2>Latest updates</h2>
          <h5>
            Do consectetur proident proident id eiusmod deserunt consequat
            pariatur ad ex velit do Lorem reprehenderit.
          </h5>
        </div>

        <div className="update-imgs-description-container">
          <div className="update-img-description">
            <div
              className="update-img"
              style={{
                backgroundImage: `url("/src/assets/images/update1.jpg")`,
              }}
            ></div>
            <div className="update-description-container">
              <h4 className="update-subheader-title">Do consectetur</h4>
              <h3 className="update-subheader-details">
                Aliqua irure tempor Lorem occaecat volup
              </h3>
              <div className="update-time-container">
                <h5>Dec 22, 2022</h5>
                <button>5 mins read</button>
              </div>
            </div>
          </div>
          <div className="update-img-description">
            <div
              className="update-img"
              style={{
                backgroundImage: `url("/src/assets/images/update2.jpg")`,
              }}
            ></div>
            <div className="update-description-container">
              <h4 className="update-subheader-title">Consequat labore</h4>
              <h3 className="update-subheader-details">
                Commodo deserunt ipsum occaecat qui
              </h3>
              <div className="update-time-container">
                <h5>Dec 20, 2022</h5>
                <button>10 mins read</button>
              </div>
            </div>
          </div>
          <div className="update-img-description">
            <div
              className="update-img"
              style={{
                backgroundImage: `url("/src/assets/images/update3.jpg")`,
              }}
            ></div>
            <div className="update-description-container">
              <h4 className="update-subheader-title">Laboris nulla</h4>
              <h3 className="update-subheader-details">
                Deserunt occaecat qui amet tempor dolore
              </h3>
              <div className="update-time-container">
                <h5>Nov 10, 2022</h5>
                <button>3 mins read</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* latest update start */}
    </>
  );
}

export default Homepage;
