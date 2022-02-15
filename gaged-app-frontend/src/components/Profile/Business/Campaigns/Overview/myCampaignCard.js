/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";

const MyCampaignCard = ({ campaign }) => {
  const shortForm = substr(campaign.investorBrief, 0, 100);

    var countDownDate = new Date(campaign.endDateString).getTime();
// Update the count down every 1 second
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

  const progress = (
    campaign.amountAlreadyRaised / campaign.amountBeingRaised
  );

  const progressString = progress.toString();

  let p;
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
}
  return (
    <div>
      <Link to={`/campaigns/business/id/${campaign._id}`}>
      <div className="flex flex-col gap-1 bg-white px-2 lg:px-4 pt-2 lg:pt-3 pb-3 lg:pb-5">
        <div>
          <img src={campaign.OwnerLogo} className="w-full" alt="" />
          <h3 className="text-xl font-medium mt-5">{campaign.campaignName}</h3>
          <p className="text-base leading-5">{shortForm}</p>
        </div>
        <div className="py-2">
          <progress
            className="progress progress-info"
            value={progressString}
            max="100"
          ></progress>
        </div>
        <div className="flex justify-between">
          <p className="text-base">{progress}% raised</p>
          <p className="text-base text-red-500">{p}</p>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default MyCampaignCard;
