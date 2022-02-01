import React, { Fragment, useEffect, useState } from "react";
import MetaData from "../Layout/metaData";
import Logof from "../../images/logo-footer.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";

function Header0() {
  let navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/campaigns/${keyword}`);
    } else {
      navigate("/campaigns");
    }
  };

  return (
    <Fragment>
      <MetaData title="Campaigns on Gaged" />
      <head className="flex justify-between bg-medium-blue px-2 md:px-4 lg:px-5 py-2">
        <div className="flex space-x-5 lg:space-x-40 h-10">
          <div>
            <Link to="/">
              <img src={Logof} className="w-4/5 lg:w-full h-full" alt="" />
            </Link>
          </div>
          <form onSubmit={searchSubmitHandler}>
            <input
              type="text"
              placeholder="Search Campaigns"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <input
              className="w-36 md:w-64 lg:w-96 outline-none pl-1 lg:pl-5"
              type="submit"
              value="Search"
            />
          </form>
        </div>
        <div className="flex gap-2 lg:gap-10 lg:pr-28 ml-auto">
          <div>
            <p className="text-xl font-normal text-white mt-1">Cart</p>
          </div>
          <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-white mt-3 lg:mt-1" />
        </div>
      </head>
    </Fragment>
  );
}

export default Header0;
