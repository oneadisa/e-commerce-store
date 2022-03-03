import React from "react";

function Mission() {
  return (
    <div className="bg-light-blue mx-auto py-10 px-5 md:px-10 lg:px-20">
      <div className="w-auto md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-4">
          Our mission is to lead the growth of Small and Medium Enterprises
          globally
        </h2>
        <p className="text-lg md:text-base lg:text-lg">
          By enabling regular people to safely invest in SMEs, we aim to reduce
          the large financing gap faced by SMEs globally.
        </p>
        <div className="grid grid-cols-2 gap-x-4 md:gap-x-12 gap-y-4 md:gap-y-8 py-10">
          <div className="flex flex-col px-2 md:px-4 pt-4 md:pt-8 pb-8 md:pb-16 bg-white rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-faded-blue">1</h3>
            <h4 className="text-lg font-bold mb-2">Sign up</h4>
            <p className="md:text-base lg:text-lg">
              Reigster an account an upload neccesary document
            </p>
          </div>
          <div className="flex flex-col px-2 md:px-4 pt-4 md:pt-8 pb-8 md:pb-16 bg-white rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-faded-blue">2</h3>
            <h4 className="text-lg font-bold mb-2">Set up a store</h4>
            <p className="md:text-base lg:text-lg">
              Publish a data store to engage your customers
            </p>
          </div>
          <div className="flex flex-col px-2 md:px-4 pt-4 md:pt-8 pb-8 md:pb-16 bg-white rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-faded-blue">3</h3>
            <h4 className="text-lg font-bold mb-2">Raise funds</h4>
            <p className="md:text-base lg:text-lg">
              Start an investment campaign to get the capital needed to scale
              your business
            </p>
          </div>
          <div className="flex flex-col px-2 md:px-4 pt-4 md:pt-8 pb-8 md:pb-16 bg-white rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-faded-blue">4</h3>
            <h4 className="text-lg font-bold mb-2">Invest</h4>
            <p className="md:text-base lg:text-lg">
              Invest in the business you trust around you to earn decent return
              on your capital
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
