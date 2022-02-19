import React from "react";
import right from "../../../../../images/right.svg";
import { GoChevronRight } from "react-icons/go";

function Frame7() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center backdrop-filter backdrop-blur-sm backdrop-brightness-50 z-50">
      <div className="mx-2 pl-6 md:pl-20 pr-3 md:pr-10 bg-white pt-2 pb-14 w-full md:w-4/5 flex flex-col gap-5">
        <div className="py-4 flex items-center border-b border-gray-400">
          <GoChevronRight />
          <h1 className="text-xl font-semibold">$100,000</h1>
        </div>
        <div className="text-lg font-medium">
          <h3>
            This category is only available to business registered as limited
            liabilty and can be raised as a loan or Equity. The requirements to
            raise this category are:
          </h3>
        </div>
        <div className="flex flex-col gap-2 text-base">
          <p>I. A minimum of 200 customers on Gaged.</p>
          <p>II. Upload business registration documents.</p>
          <p>III. You should select a repayment plan for loans.</p>
          <p>
            IV. Upload an introductory video of the organization and stating the
            purpose of the funding.
          </p>
          <p>V. Upload a pitchdeck.</p>
          <p>
            VI. You are encouraged offer a percentage of your profit to lenders.
          </p>
          <p>
            VII. You must have 150 unique investors/lenders from your private
            network participate in the campaign before your campaign can be
            publicly listed on Gaged.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Frame7;
