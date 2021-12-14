/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
// import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Logof from "../../images/logo-footer.jpg";
import analytics from "../../images/analytics.png";
import wallet from "../../images/wallet.png";
import store from "../../images/store.png";
import settings from "../../images/settings.png";
import dashboard from "../../images/dashboard.png";
import campaign from "../../images/campaign.png";
import Loader from "../../componenets/Loader";
import GeneralErrorMessage from "../../componenets/GeneralErrorMessage";
// import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  listStoreProducts,
  deleteStoreProductAction,
} from "../../actions/storeProductsActions";

function ProductsAll() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const storeProductsList = useSelector(
    (state: RootStateOrAny) => state.storeProductsList
  );
  const { loading, error, storeProducts } = storeProductsList;

  const signedUpBusinessLogin = useSelector(
    (state: RootStateOrAny) => state.signedUpBusinessLogin
  );
  const { signedUpBusinessInfo } = signedUpBusinessLogin;

  const storeProductDelete = useSelector(
    (state: RootStateOrAny) => state.storeProductDelete
  );
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = storeProductDelete;

  const storeProductCreate = useSelector(
    (state: RootStateOrAny) => state.storeProductCreate
  );
  const { success: successCreate } = storeProductCreate;

  const storeProductUpdate = useSelector(
    (state: RootStateOrAny) => state.storeProductUpdate
  );
  const { success: successUpdate } = storeProductUpdate;

  useEffect(() => {
    dispatch(listStoreProducts());
    if (!signedUpBusinessInfo) {
      navigate("/");
    }
  }, [
    dispatch,
    navigate,
    signedUpBusinessInfo,
    successDelete,
    successCreate,
    successUpdate,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteStoreProductAction(id));
    }
  };

  const [search, setSearch] = useState("");
  console.log(search);

  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };

  // photos.forEach((photo, index) => {
  // photo.serial = index + 1;
  // });

  return (
    <div className="mx-auto">
      <head className="flex justify-between bg-medium-blue px-2 lg:px-5 py-2">
        <div className="flex space-x-5 lg:space-x-40 h-10">
          <div className="flex">
            <div className="text-2xl lg:hidden text-white" onClick={handleNav}>
              {open === true ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </div>
            <img src={Logof} className="w-4/5 lg:w-full" />
          </div>
          <input
            placeHolder="Search Product Titles"
            className="w-28 lg:block lg:w-96 outline-none pl-1 lg:pl-5"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2 lg:gap-10 lg:pr-28 ml-auto">
          <div>
            <p className="text-xl font-normal text-white mt-1">Cart</p>
          </div>
          <div className="w-3 h-3 lg:w-7 lg:h-7 rounded-full bg-white mt-3 lg:mt-1" />
        </div>
      </head>
      <div className="lg:bg-magenta-blue lg:px-4 h-screen">
        <div className="block lg:flex lg:space-x-36">
          <ul
            className={
              "w-1/3 lg:w-32 min-h-screen lg:min-h-0 absolute transition duration-200 bg-magenta-blue text-Dark-grey lg:static flex flex-col text-lg font-medium lg:mt-16 lg:block" +
              (open === true ? " " : " hidden ")
            }
          >
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img src={dashboard} className="w-5 h-5 mt-1" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img src={campaign} className="w-5 h-5 mt-1" />
                <p>Campaigns</p>
              </Link>
            </li>
            <li className="my-3 bg-white p-3 rounded text-Dark-blue mr-10 lg:mr-0">
              <Link to="/" className="flex gap-3">
                <img src={store} className="w-5 h-5 mt-1" />
                <p>Store</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img src={analytics} className="w-5 h-5 mt-1" />
                <p>Analytics</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img src={wallet} className="w-5 h-5 mt-1" />
                <p>Wallet</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="/" className="flex gap-3">
                <img src={settings} className="w-5 h-5 mt-1" />
                <p>Settings</p>
              </Link>
            </li>
          </ul>
          <div className="flex flex-col lg:space-y-10 lg:w-4/5">
            <div className="flex flex-col lg:flex-row px-3 pt-2 gap-2 text-base lg:text-lg font-normal bg-white lg:px-5">
              <div className="flex justify-between lg:gap-10">
                <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                  Overview
                </p>
                <p className="p-1 lg:p-2 cursor-pointer border-b-2 border-Dark-blue hover:text-Dark-blue">
                  Products
                </p>
                <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                  Orders
                </p>
                <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                  Customers
                </p>
                <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                  Reviews
                </p>
              </div>

              <button className="border border-Dark-blue px-3 mb-2 rounded ml-auto hover:bg-Dark-blue hover:text-white">
                <Link to="">Visit store </Link>
              </button>
            </div>
            {error && (
              <GeneralErrorMessage bg="danger">{error}</GeneralErrorMessage>
            )}
            {errorDelete && (
              <GeneralErrorMessage bg="danger">
                {errorDelete}
              </GeneralErrorMessage>
            )}
            {loading && <Loader />}
            {loadingDelete && <Loader />}
            <div className="flex flex-col p-5 mt-10 bg-white h-auto lg:h-96">
              <div className="flex">
                <h3 className="font-semibold text-xl mt-1 lg:mt-2">
                  All Products
                </h3>

                <button className="ml-auto bg-Dark-blue border border-Dark-blue text-white py-2 px-4 font-normal text-base hover:bg-white hover:text-Dark-blue">
                  <Link to="/store/products/new">New Product</Link>
                </button>
              </div>
              <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-between lg:border-b border-black mt-10 pb-2 px-2">
                <p className="border-b border-black lg:border-0 py-2">#</p>
                <p className="border-b border-black lg:border-0 py-2">
                  PRODUCT NAME
                </p>
                <p className="border-b border-black lg:border-0 py-2">
                  CATEGORY
                </p>
                <p className="border-b border-black lg:border-0 py-2">STOCK</p>
                <p className="border-b border-black lg:border-0 py-2">PRICE</p>
                <p className="border-b border-black lg:border-0 py-2">STATUS</p>
                <p className="border-b border-black lg:border-0 py-2">
                  ACTION
                </p>{" "}
              </div>
              <div>
                {storeProducts
                  ?.reverse()
                  .filter((filteredstoreProduct) =>
                    filteredstoreProduct.productTitle
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  )
                  .map((storeProduct) => (
                    <>
                      <div key={storeProduct._id}>
                        <p>{storeProduct.productTitle}</p>
                        <p>{storeProduct.shortDescription}</p>
                        <p>{storeProduct.productDetails}</p>
                        <p>{storeProduct.standardPrice}</p>
                        <p>{storeProduct.discountedPrice}</p>
                        <p>{storeProduct.costPrice}</p>
                        <p>{storeProduct.productStockCount}</p>
                        <p>{storeProduct.productUnitCount}</p>
                        <p>{storeProduct.productSKU}</p>
                        <p>{storeProduct.productImageOne}</p>
                        <p>{storeProduct.productImageTwo}</p>
                        <p>{storeProduct.productImageThree}</p>
                        <p>{storeProduct.category}</p>
                        <div>
                          <a href={"/store/products/" + storeProduct._id}>
                            Edit
                          </a>
                          <Button
                            variant="danger"
                            className="mx-2"
                            onClick={() => deleteHandler(storeProduct._id)}
                          >
                            Delete
                          </Button>
                          <footer className="blockquote-footer">
                            Created on{" "}
                            <cite title="Source Title">
                              {storeProduct.createdAt.substring(0, 10)}
                            </cite>
                          </footer>
                        </div>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsAll;

// &&
// storeProducts
// .filter((filteredstoreProduct) =>
// filteredstoreProduct.productTitle
// .toLowerCase()
// .includes(search.toLowerCase())
// )
// .reverse()
