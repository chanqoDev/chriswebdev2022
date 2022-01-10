import React from "react";
import "./intro.css";
import Me from "../../img/me.png";
const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="i-intro">Hello my name is</h2>
          <h1 className="intro-name">Christian Elena</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">UI/UX Designer</div>
              <div className="intro-title-item">Adobe XD</div>
              <div className="intro-title-item">Full-stack Developer</div>
              <div className="intro-title-item">Dark Chocolate Enthusiast</div>
            </div>
          </div>
          <div className="intro-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at
              dolores molestias fugit itaque neque adipisci maiores fugiat
              maxime tenetur.
            </p>
          </div>
        </div>
      </div>
      <div className="intro-right">
        <img src={Me} alt="" className="intro-img" />
      </div>
    </div>
  );
};

export default Intro;
