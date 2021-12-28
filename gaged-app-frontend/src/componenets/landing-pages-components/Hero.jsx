import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center align-center justify-center py-14 px-5 md:py-28 lg:py-28 md:px-10 lg:px-20 mx-auto bg-light-blue">
      <h1 className="text-4xl lg:text-6xl font-bold text-medium-blue">
        Built for growth
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl leading-6 md:leading-8 font-normal text-center my-4 md:my-7">
        Meet the platform that powers you to
        <br />
        achieve your goal objective.
      </p>
      <div className="flex gap-3 md:gap-5 my-3 md:my-4">
        <Link to="/signup">
          <button className="py-2 px-10 md:py-3 md:px-20 border-2 border-Dark-blue bg-Dark-blue text-white sm:text-base md:text-xl font-medium rounded hover:bg-white hover:animate-bounce hover:text-Dark-blue">
            Sign up
          </button>
        </Link>
        <Link to="/explore/campaigns">
          <button className="py-2 px-10 md:py-3 md:px-20 border-2 border-Dark-blue text-Dark-blue sm:text-base md:text-xl font-medium rounded hover:animate-bounce hover:bg-Dark-blue hover:text-white">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Hero;
