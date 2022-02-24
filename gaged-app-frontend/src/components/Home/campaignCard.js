/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";

const CampaignCard = ({ campaign }) => {
  const shortForm = campaign.investorBrief.slice(0, 100);

  var countDownDate = new Date(campaign.endDateString).getTime();

  // Update the count down every 1 second
  let p;

  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor(
      (distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
    );
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML =
      weeks +
      "w" +
      days +
      "d " +
      hours +
      "h " +
      minutes +
      "m " +
      seconds +
      "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }

    if (distance > 1000 * 60 * 60 * 24 * 7) {
      p = <p className="text-lg">{weeks} weeks left</p>;
    } else if (distance > 1000 * 60 * 60 * 24) {
      p = <p className="text-lg">{days} days left</p>;
    } else if (distance > 1000 * 60 * 60) {
      p = <p className="text-lg">{hours} hours left</p>;
    } else if (distance > 1000 * 60) {
      p = <p className="text-lg">{minutes} minutes left</p>;
    } else if (distance > 1000) {
      p = <p className="text-lg">{seconds} seconds left</p>;
    } else {
      p = <p className="text-lg">EXPIRED</p>;
    }
  }, 1000);

  const progress = (
    campaign.amountAlreadyRaised / campaign.amountBeingRaised
  ).toString();

  return (
    <Link to={`/campaign/${campaign._id}`}>
      <div className="flex flex-col">
        <div className="mb-3">
          <img alt="" src={campaign.ownerLogo} className="w-full h-fit" />
          <h4 className="text-lg font-bold my-2">{campaign.campaignName}</h4>
          <p className="text-base leading-5">{shortForm}...</p>
        </div>
        <div className="mb-7">
          <div className="flex justify-between">
            <p className="font-medium text-lg">
              $ {campaign.amountAlreadyRaised} raised
            </p>
            <p className="text-lg">$ {campaign.amountBeingRaised}</p>
          </div>
          <div className="py-2">
            <div className="p-6 space-y-2 artboard phone">
              <progress
                className="progress progress-info"
                value={progress}
                max="100"
              ></progress>
            </div>
            {p}
          </div>
          <button className="w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue">
            <Link to={`/campaign/${campaign._id}`}>Fund</Link>
          </button>
        </div>
      </div>
    </Link>
  );
};
export default CampaignCard;
