import React from "react";
import "../home/Home.scss";

const Home = () => {
  return (
    <div className="container">
      <div className="content-container">
        <div className="featured-content">
          <h1 className="featured-title">
            SPIDER MAN THE HOME COMING <span>(2023)</span>
          </h1>
          <h3>Dual Audio(Hindi -ENG) !MAX BluRay 480p 720p & 1080p | CDrive</h3>
          <p className="featured-desc">
            <strong>Movies Plot:</strong>Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Iusto illo dolor deserunt nam assumenda ipsa
            eligendi dolore, ipsum id fugiat quo enim impedit, laboriosam omnis
            minima voluptatibus incidunt. Accusamus, provident.
          </p>
          <div className="sub">
            <span>
              <strong className="mbd">IMDB</strong> <span>Ratings : </span> 4.7
            </span>
            <span>
              <i className="fa fa-star" aria-hidden="true"></i>
            </span>
            <span>
              <i className="fa fa-star" aria-hidden="true"></i>
            </span>
            <span>
              <i className="fa fa-star" aria-hidden="true"></i>
            </span>
            <span>
              <i className="fa fa-star" aria-hidden="true"></i>
            </span>
            <span>
              <i className="fa fa-star-half" aria-hidden="true"></i>
            </span>
          </div>
          <div className="btn-feature">
            <button className="featured-button">
              WATCH <i class="fas fa-play" aria-hidden="true"></i>
            </button>
            <button className="featured-button2">
              WATCH TRAILER<i class="fa fa-play-circle" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
