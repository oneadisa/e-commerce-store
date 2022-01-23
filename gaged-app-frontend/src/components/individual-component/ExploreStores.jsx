/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useState, useEffect } from "react";
import Header0 from "./Header0";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import MetaData from "../../components/Layout/metaData";
import BusinessCard from "../Home/businessCard";
import { clearErrors, getBusiness } from "../../actions/businessActions";
import Loader from "../../components/Loader";
import Typography from "@material-ui/core/Typography";
import Pagination from "react-js-pagination";

const categories = [
  "Retail",
  "Fashion",
  "Hospitality",
  "Food Service",
  "Manufacturing",
  "Consulting",
  "Toys",
  "Gift Items",
  "Other",
];

function ExploreStores() {
  const dispatch = useDispatch();
  const params = useParams();
  let navigate = useNavigate();

  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);

  const [category, setCategory] = useState("");

  const {
    allBusinesses,
    loading,
    error,
    businessesCount,
    resultPerPage,
    filteredBusinessCount,
  } = useSelector((state: RootStateOrAny) => state.allBusinesses);
  const keyword = params.keyword;
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  let count = filteredBusinessCount;
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getBusiness(keyword, currentPage, category));
  }, [dispatch, keyword, currentPage, category, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Explore Stores" />
          <div className="mx-auto">
            <Header0 />
            <div className="bg-magenta-blue py-14 px-3 lg:px-20 items-center text-center">
              <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold">
                Explore Stores
              </h1>
              <p className="text-base md:text-lg lg:text-lg my-3">
                Search and discover the digital stores of businesses near you
              </p>
              <div>
                <input
                  placeholder="search"
                  className="w-full md:w-3/4 h-10 rounded pl-3 outline-none"
                />
                <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 my-5 lg:my-8">
                  {allBusinesses &&
                    allBusinesses.map((business) => (
                      <BusinessCard key={business._id} business={business} />
                    ))}
                </div>
                <Typography>Categories</Typography>
                <ul className="categoryBox">
                  {categories.map((category) => (
                    <li
                      className="category-link"
                      key={category}
                      onClick={() => setCategory(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={businessesCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}

export default ExploreStores;
