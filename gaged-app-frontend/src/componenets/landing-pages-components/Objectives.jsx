import React from "react";
import { Link } from "react-router-dom";

function Objectives() {
  return (
    <div className="flex flex-col items-center pt-14 md:pt-20 pb-10 md:pb-10 px-5 md:px-32 lg:px-60">
      <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-4 text-center">
        We provide you with a platform built to enable you reach your growth
        objectives
      </h2>
      <p className="text-center text-lg mb-6">
        Access the exact tools you need to operate a digtal store, track your
        business growth and successfully raise funds for your business.
      </p>
      <div className="flex flex-col md:flex-row lg:flex-row gap-4 md:gap-7 my-3 md:my-5">
        <Link to="/signup">
          <button className="h-12 w-56 md:w-44 text-white border border-Dark-blue font-semibold text-lg bg-Dark-blue rounded hover:bg-white hover:text-Dark-blue">
            Get started
          </button>
        </Link>
        <Link to="/explore/campaigns">
          <button className="h-12 w-56 md:w-44 text-Dark-blue font-semibold text-lg border border-Dark-blue rounded hover:bg-Dark-blue hover:text-white">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Objectives;
