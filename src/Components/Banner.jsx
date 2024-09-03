import React from "react";
import bg from "../assets/image/Beige Tan Aesthetic Brand Board Photo Collage.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`, // Set background image
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md mx-auto">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
