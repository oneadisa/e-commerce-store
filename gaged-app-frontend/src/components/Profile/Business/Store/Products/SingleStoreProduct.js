/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
// import { Switch } from "@headlessui/react";
import Logof from "../../images/logo-footer.jpg";
import analytics from "../../images/analytics.png";
import wallet from "../../images/wallet.png";
import store from "../../images/store.png";
import settings from "../../images/settings.png";
import dashboard from "../../images/dashboard.png";
import campaign from "../../images/campaign.png";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/solid";
import axios from "axios";
import Loader from "../Loader";
import GeneralErrorMessage from "../GeneralErrorMessage";
import {
  deleteStoreProductAction,
  updateStoreProductAction,
} from "../../actions/storeProductsActions";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import "./toggle.css";
function SingleStoreProduct() {
  let navigate = useNavigate();
  let params = useParams();
  const [productCredentials, setProductCredentials] = useState({
    productTitle: null,
    shortDescription: null,
    productDetails: null,
    standardPrice: null,
    discountedPrice: null,
    costPrice: null,
    productStockCount: null,
    productUnitCount: null,
    productSKU: null,
    productImageOne: null,
    productImageTwo: null,
    productImageThree: null,
    category: null,
  });

  const [date, setDate] = useState("");

  const [picMessage, setPicMessage] = useState(null);
  //https://icon-library.com/icon/icon-image-file-18.html.html
  function postFirstImageDetails(pics): any {
    if (pics === "https://icon-library.com/icon/icon-image-file-29.html.html") {
      return setPicMessage("Please select at least one image.");
    }
    setPicMessage(null);
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "gagedio");
      data.append("cloud_name", "gaged");
      fetch("https://api.cloudinary.com/v1_1/gaged/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // setProductCredentials.productImageOne(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please select at least one image.");
    }
  }
  function postSecondImageDetails(pics): any {
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "gagedio");
      data.append("cloud_name", "gaged");
      fetch("https://api.cloudinary.com/v1_1/gaged/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // setProductCredentials.productImageTwo(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // return setPicMessage("Please select at least one image.");
    }
  }
  function postThirdImageDetails(pics): any {
    setPicMessage(null);
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "gagedio");
      data.append("cloud_name", "gaged");
      fetch("https://api.cloudinary.com/v1_1/gaged/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // setProductCredentials.productImageThree(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      productCredentials.productImageThree();
      // return setPicMessage("Please select at least one image.");
    }
  }

  function handlechange(event) {
    const { value, name } = event.target;
    setProductCredentials((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const dispatch = useDispatch();

  const storeProductUpdate = useSelector(
    (state: RootStateOrAny) => state.storeProductUpdate
  );
  const { loading, error } = storeProductUpdate;

  const storeProductDelete = useSelector(
    (state: RootStateOrAny) => state.storeProductDelete
  );
  const { loading: loadingDelete, error: errorDelete } = storeProductDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteStoreProductAction(id));
    }
    navigate("/store/products/all");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/app/store/products/${params.id}`);

      setProductCredentials({
        productTitle: data.productTitle,
        shortDescription: data.shortDescription,
        productDetails: data.productDetails,
        standardPrice: data.standardPrice,
        discountedPrice: data.discountedPrice,
        costPrice: data.costPrice,
        productStockCount: data.productStockCount,
        productUnitCount: data.productUnitCount,
        productSKU: data.productSKU,
        productImageOne: data.productImageOne,
        productImageTwo: data.productImageTwo,
        productImageThree: data.productImageThree,
        category: data.category,
      });
      setDate(data.updatedAt);
    };

    fetching();
  }, [params.id, date]);

  //   console.log(storeProduct);
  //console.log(match.params.id);

  const resetHandler = () => {
    setProductCredentials({
      productTitle: "",
      shortDescription: "",
      productDetails: "",
      standardPrice: "",
      discountedPrice: "",
      costPrice: "",
      productStockCount: "",
      productUnitCount: "",
      productSKU: "",
      productImageOne: "",
      productImageTwo: "",
      productImageThree: "",
      category: "",
    });
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateStoreProductAction(
        params.id,
        productCredentials.productTitle,
        productCredentials.shortDescription,
        productCredentials.productDetails,
        productCredentials.standardPrice,
        productCredentials.discountedPrice,
        productCredentials.costPrice,
        productCredentials.productStockCount,
        productCredentials.productUnitCount,
        productCredentials.productSKU,
        productCredentials.productImageOne,
        productCredentials.productImageTwo,
        productCredentials.productImageThree,
        productCredentials.category
      )
    );
    if (
      !productCredentials.productTitle ||
      !productCredentials.shortDescription ||
      !productCredentials.productDetails ||
      !productCredentials.standardPrice ||
      !productCredentials.discountedPrice ||
      !productCredentials.costPrice ||
      !productCredentials.productUnitCount ||
      !productCredentials.productImageOne ||
      !productCredentials.category
    )
      return;

    resetHandler();
    navigate("/store/products/all");
  };

  useEffect(() => {}, []);

  const [open, setOpen] = useState(false);
  // const [enabled, setEnabled] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };

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
            <Link to="/">
              <img src={Logof} className="w-4/5 lg:w-full" />
            </Link>
          </div>
          <input
            name=""
            value=""
            className="w-28 lg:block lg:w-96 outline-none pl-1 lg:pl-5"
          />
        </div>
        <div className="flex gap-2 lg:gap-10 lg:pr-28 ml-auto">
          <div>
            <p className="text-xl font-normal text-white mt-1">Cart</p>
          </div>
          <div className="w-3 h-3 lg:w-7 lg:h-7 rounded-full bg-white mt-3 lg:mt-1" />
        </div>
      </head>
      <div className="lg:bg-magenta-blue lg:px-4 h-full">
        <div className="block lg:flex lg:space-x-36">
          <ul
            className={
              "w-2/3 lg:w-32 min-h-screen lg:min-h-0 absolute transition duration-200 bg-magenta-blue text-Dark-grey lg:static flex flex-col text-lg font-medium lg:mt-16 lg:block" +
              (open === true ? " " : " hidden ")
            }
          >
            <li className="my-3 p-3">
              <Link to="" className="flex gap-3">
                <img src={dashboard} className="w-5 h-5 mt-1" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="" className="flex gap-3">
                <img src={campaign} className="w-5 h-5 mt-1" />
                <p>Campaigns</p>
              </Link>
            </li>
            <li className="my-3 bg-white p-3 rounded text-Dark-blue mr-10 lg:mr-0">
              <Link to="/store/products/all" className="flex gap-3">
                <img src={store} className="w-5 h-5 mt-1" />
                <p>Store</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="" className="flex gap-3">
                <img src={analytics} className="w-5 h-5 mt-1" />
                <p>Analytics</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="" className="flex gap-3">
                <img src={wallet} className="w-5 h-5 mt-1" />
                <p>Wallet</p>
              </Link>
            </li>
            <li className="my-3 p-3">
              <Link to="" className="flex gap-3">
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
                Visit store
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
            {loadingDelete && <Loader />}
            {loading && <Loader />}
            <div className="px-3 lg:px-8 py-0 lg:py-5 mt-4 lg:mt-10 bg-white">
              <h2 className="text-lg font-medium">New Product</h2>
              <div className="mt-5">
                <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-2 lg:flex-row">
                  <div className="flex flex-col gap-6 border-2 pt-5 lg:pt-8 pb-9 lg:pb-12 px-3 lg:pl-6 lg:pr-14 lg:w-2/3">
                    <div className="flex flex-col gap-2">
                      <label className="text-lg font-normal text-Dark-grey">
                        Product title
                      </label>
                      <input
                        onChange={handlechange}
                        name="productTitle"
                        value={productCredentials.productTitle}
                        className="border-2 h-10 outline-none pl-3"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-lg font-normal text-Dark-grey">
                        Short description
                      </label>
                      <input
                        onChange={handlechange}
                        name="shortDescription"
                        value={productCredentials.shortDescription}
                        className="border-2 h-10 outline-none pl-3"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-lg font-normal text-Dark-grey">
                        Product details
                      </label>
                      <textarea
                        onChange={handlechange}
                        name="productDetails"
                        value={productCredentials.productDetails}
                        className="border-2 h-32 outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-5 flex-col lg:w-1/3">
                    <div className="border-2 py-2">
                      <h4 className="text-lg font-medium px-3 py-1">
                        Publish product
                      </h4>
                      <div className="border-t-2 px-3 pt-3">
                        <p className="text-lg font-normal text-Dark-grey mb-3">
                          Product status
                        </p>
                        {/* <div className="pb-5 flex gap-3"> */}
                        {/* <Switch */}
                        {/* // checked={enabled} */}
                        {/* // onChange={setEnabled} */}
                        {/* // className={`block bg-gray-400 rounded-full shadow border-2 border-transparent h-6 w-12 transition duration-200 ${ */}
                        {/* // enabled ? "" : "justify-end bg-Dark-blue" */}
                        {/* // }`} */}
                        {/* // > */}
                        {/* <span className="block h-full w-6 rounded-full bg-white" /> */}
                        {/* </Switch> */}
                        {/* <div> */}
                        {/* <p className="text-lg font-normal text-Dark-grey mb-3"> */}
                        {/* Draft */}
                        {/* </p> */}
                        {/* </div> */}
                        {/* </div> */}
                        <div className="pb-5 flex gap-3">
                          <label
                            htmlFor="toggleB"
                            className="flex items-center
                        bg-gray-400 rounded-full shadow border-2
                        border-transparent h-6 w-12 transition duration-200
                        cursor-pointer"
                          >
                            <div className="relative">
                              <input
                                type="checkbox"
                                id="toggleB"
                                className="sr-only"
                              />
                              <div className="block bg-grey-700 w-14 h-8 rounded-full"></div>
                              <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                            </div>
                            <div className="ml-3 text-gray-700 font-medium">
                              <p className="text-lg font-normal text-Dark-grey mb-3">
                                Draft
                              </p>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="flex justify-between mt-4">
                        <button className="border py-2 px-2 text-Dark-blue hover:bg-Dark-blue hover:text-white ">
                          Preview
                        </button>
                        <button
                          onClick={updateHandler}
                          className="border py-2 px-2 bg-Dark-blue text-white hover:bg-white hover:text-Dark-blue"
                        >
                          Save product
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border-2 h-48">
                    <div className="flex justify-between px-3 pt-2 pb-1">
                      <h4 className="text-lg font-medium">Choose category</h4>
                      <p className="text-base font-medium text-Dark-blue">
                        Add new
                      </p>
                    </div>
                    <div className="border-t-2 pt-3 px-3">
                      <input
                        onChange={handlechange}
                        name="category"
                        value={productCredentials.category}
                        className="border-2 w-full h-10 outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-2 mt-5 lg:w-2/3 px-3 lg:px-6 pt-6 pb-10">
                <h2 className="text-lg font-medium">Price and Quantity</h2>
                <div className="grid grid-rows-1 gap-5 lg:gap-0 lg:grid-cols-3 mt-4">
                  <div className="flex">
                    <div className="border-2 p-2 text-Dark-grey">$</div>
                    <input
                      onChange={handlechange}
                      name="standardPrice"
                      value={productCredentials.standardPrice}
                      placeholder="Standard price"
                      className="border-2 pl-4 lg:w-44 outline-none"
                    />
                  </div>
                  <div className="flex">
                    <div className="border-2 p-2 text-Dark-grey">$</div>
                    <input
                      onChange={handlechange}
                      name="discountedPrice"
                      value={productCredentials.discountedPrice}
                      placeholder="Discounted price"
                      className="border-2 pl-4 lg:w-44 outline-none"
                    />
                  </div>
                  <div className="flex">
                    <div className="border-2 p-2 text-Dark-grey">$</div>
                    <input
                      onChange={handlechange}
                      name="costPrice"
                      value={productCredentials.costPrice}
                      placeholder="Cost price"
                      className="border-2 pl-4 lg:w-44 outline-none"
                    />
                  </div>
                </div>
                <div className="mt-5 grid grid-rows-1 gap-5 lg:gap-0 lg:grid-cols-3">
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium">Stock</h4>
                    <input
                      onChange={handlechange}
                      name="productStockCount"
                      value={productCredentials.productStockCount}
                      placeholder="Product count"
                      className="border-2 lg:w-52 h-10 outline-none text-center"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium">Unit</h4>
                    <input
                      onChange={handlechange}
                      name="productUnitCount"
                      value={productCredentials.productUnitCount}
                      placeholder="Product count"
                      className="border-2 lg:w-52 h-10 outline-none text-center"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium">SKU</h4>
                    <input
                      onChange={handlechange}
                      name="productSKU"
                      value={productCredentials.productSKU}
                      placeholder="Product SKU"
                      className="border-2 lg:w-52 h-10 outline-none text-center"
                    />
                  </div>
                </div>
              </div>
              {picMessage && (
                <GeneralErrorMessage>{picMessage}</GeneralErrorMessage>
              )}
              <div className="border-2 my-5 lg:w-2/3 px-6 pt-6">
                <h2 className="text-lg font-medium">Product images</h2>

                <div className="flex w-full h-screen items-center justify-center bg-grey-lighter">
                  <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">
                      Select a file
                    </span>
                    <input
                      onChange={(e) => postFirstImageDetails(e.target.files[0])}
                      id="custom-file"
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="flex  bg-grey-lighter">
                  <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">
                      Select a file
                    </span>
                    <input
                      onChange={(e) =>
                        postSecondImageDetails(e.target.files[0])
                      }
                      id="custom-file"
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="flex bg-grey-lighter">
                  <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">
                      Select a file
                    </span>
                    <input
                      onChange={(e) => postThirdImageDetails(e.target.files[0])}
                      id="custom-file"
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>
                <button
                  onClick={resetHandler}
                  className="border py-2 px-2 text-Dark-blue hover:bg-Dark-blue hover:text-white "
                >
                  RESET FIELDS
                </button>
                <button
                  onClick={() => deleteHandler(params.id)}
                  className="border py-2 px-2 bg-white text-red hover:bg-Dark-red hover:text-white "
                >
                  DELETE
                </button>
                <footer className="text-muted">
                  Last Updated on - {date.substring(0, 10)}
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleStoreProduct;
