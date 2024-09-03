import React from "react";
import video from "../assets/image/Green and White Watercolor Wedding Invitation Mobile Video.mp4";

const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen p-8">
      <div className="hero-content flex-col lg:flex-row">
        {/* Video with fixed height and width */}
        <video
          src={video}
          autoPlay
          loop
          muted
          className="w-80 h-60 object-cover rounded-lg shadow-2xl"
        />
        <div className="text-center lg:text-left lg:pl-8 mt-8 lg:mt-0">
          <h1 className="text-5xl font-bold mb-4">Box Office News!</h1>
          <p className="py-6 text-lg">
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

export default About;
