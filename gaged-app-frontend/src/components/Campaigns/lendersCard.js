import React from "react";

const LendersCard = ({ loan }) => {
  return (
    <div className="flex gap-2 pb-2">
      <img alt="Profile_picture" src={loan.pic} />
      <div className="flex flex-col mt-2">
        <div className="flex gap-2">
          <h3 className="text-base font-medium">{loan.name}</h3>
          <div className="text-Dark-blue text-base font-medium">
            {loan.amount}
          </div>
        </div>
        <p className="text-sm font-normal">{loan.date}</p>
      </div>
    </div>
  );
};

export default LendersCard;
