import React from "react";
import homeBanner from "../../images/home-banner.png";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return(
    <div className="home">
      <div className="home__container">
        <div className="home__content">
          <h6 className="home__subtitle">new collection</h6>
          <h2 className="home__title">Christmas Story</h2>
          <p className="home__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur eu odio justo sed congue arcu suscipit. Elementum nisi, felis, purus consectetur cras. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <Link className="home__button" to="/store">Take a Look</Link>
        </div>
        <div className="home__picture">
          <img src={homeBanner} alt="home banner" className="home__img" />
        </div>
      </div>
    </div>
  )
};

export default Home;
