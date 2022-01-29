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
<<<<<<< HEAD
            <div className='bg-magenta-blue py-14 px-3 lg:px-20 items-center text-center'>
                <h1 className='text-2xl md:text-3xl lg:text-3xl font-bold'>Explore Stores</h1>
                <p className='text-base md:text-lg lg:text-lg my-3'>Search and discover the digital stores of businesses near you</p>
                <div>
                    <input placeholder='search' className='w-full md:w-3/4 h-10 rounded pl-3 outline-none' />
                </div>
                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-10 text-left my-10'>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-20'>
                            <img alt='' src={vibe} className='w-full' />
                            <h4 className='text-lg font-bold my-2'>Vibes Store</h4>
                            <p className='text-base leading-5'>
                                Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                            </p>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-20'>
                            <img alt='' src={alot} className='w-full' />
                            <h4 className='text-lg font-bold my-2'>Vibes Store</h4>
                            <p className='text-base leading-5'>
                                Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                            </p>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-20'>
                            <img alt='' src={password} className='w-full' />
                            <h4 className='text-lg font-bold my-2'>Vibes Store</h4>
                            <p className='text-base leading-5'>
                                Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                            </p>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-20'>
                            <img alt='' src={sincerity} className='w-full' />
                            <h4 className='text-lg font-bold my-2'>Vibes Store</h4>
                            <p className='text-base leading-5'>
                                Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                            </p>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-20'>
                            <img alt='' src={akhlaq} className='w-full' />
                            <h4 className='text-lg font-bold my-2'>Alat Gadgets</h4>
                            <p className='text-base leading-5'>
                                Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                            </p>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-20'>
                            <img alt='' src={queen} className='w-full' />
                            <h4 className='text-lg font-bold my-2'>password</h4>
                            <p className='text-base leading-5'>
                            Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                            </p>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-20'>
                            <img alt='' src={foodsupply} className='w-full' />
                            <h4 className='text-lg font-bold my-2'>foodsupply</h4>
                            <p className='text-base leading-5'>
                                Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                            </p>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-20'>
                            <img alt='' src={volunteer} className='w-full' />
                            <h4 className='text-lg font-bold my-2'>Volunteer</h4>
                            <p className='text-base leading-5'>
                                Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                            </p>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
                    <div className='flex flex-col p-2 bg-white rounded'>
                        <div className='mb-20'>
                            <img alt='' src={duties} className='w-full' />
                            <h4 className='text-lg font-bold my-2'>Duties</h4>
                            <p className='text-base leading-5'>
                                Brewed for every occassion. Introduce vibes drinks at your event, get your guests vibing.
                            </p>
                        </div>
                        <button className='w-full border-2 bg-Dark-blue py-2 text-base font-semibold text-white rounded hover:bg-white hover:text-Dark-blue'>Shop</button>
                    </div>
=======
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
>>>>>>> main
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
