/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useEffect, useState } from "react";
// import { Switch } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/solid";
import Header from "./Header";
import DashBoard from "./DashBoard";
import Loader from "../../../../../Layout/Loader/Loader";
import GeneralErrorMessage from "../../../../../Layout/Errors/GeneralErrorMessage";
import {
  clearErrors,
  createStoreProductAction,
} from "../../../../../../actions/storeProductsActions";
import { newProduct } from "../../../../../../actions/businessActions";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import MetaData from "../../../../../Layout/MetaData";
import { NEW_STORE_PRODUCTS_RESET } from "../../../../../../constants/businessConstants";
import { STORE_PRODUCTS_CREATE_RESET } from "../../../../../../constants/storeProductsConstants";
import {} from "../../../../../../constants/businessConstants";

function ProductsNew() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const storeProductCreate = useSelector(
    (state: RootStateOrAny) => state.storeProductCreate
  );
  const { loading, error, success } = storeProductCreate;

  const { businessLoading, businessError, businessSuccess } = useSelector(
    (state: RootStateOrAny) => state.businessStoreProductCreate
  );

  const [productCredentials, setProductCredentials] = useState({
    productTitle: "",
    shortDescription: "",
    productDetails: "",
    standardPrice: "",
    discountedPrice: "",
    costPrice: "",
    category: "",
    productUnitCount: "",
  });

  const alert = useAlert();

  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  useEffect(() => {
    if (error || businessError) {
      alert.error(error);
      alert.error(businessError);
      dispatch(clearErrors());
    }
    if (success || businessSuccess) {
      alert.success("Product Created Successfully");
      navigate("/business/dashboard");
      dispatch({ type: NEW_STORE_PRODUCTS_RESET });
      dispatch({ type: STORE_PRODUCTS_CREATE_RESET });
    }
  }, [
    dispatch,
    alert,
    error,
    navigate,
    success,
    businessError,
    businessSuccess,
  ]);
  const createProductSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("productTitle", productCredentials.productTitle);
    myForm.set("standardPrice", productCredentials.standardPrice);
    myForm.set("shortDescription", productCredentials.shortDescription);
    // myForm.set("category", category);
    myForm.set("productUnitCount", productCredentials.productUnitCount);
    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createStoreProductAction(myForm));
    resetHandler();
    navigate("/store/products/all");
  };
  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    setImagesPreview([]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  function handlechange(event) {
    const { value, name } = event.target;
    setProductCredentials((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const resetHandler = () => {
    setProductCredentials({
      productTitle: "",
      shortDescription: "",
      productDetails: "",
      discountedPrice: "",
      costPrice: "",
      productUnitCount: "",
      category: "",
    });
  };

  const [open, setOpen] = useState(false);
  // const [enabled, setEnabled] = useState(false);

  return (
    <Fragment>
      <MetaData title="Create Product" />
      <div className="mx-auto">
        <Header
          handleNav={() => setOpen(!open)}
          button={
            open ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )
          }
        />
        <div className="lg:bg-magenta-blue lg:px-4 h-full">
          <div className="block lg:flex lg:space-x-36">
            <div className="hidden lg:block">
              <DashBoard />
            </div>
            <div className="lg:hidden">{open && <DashBoard />}</div>
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
                            onClick={createProductSubmitHandler}
                            className="border py-2 px-2 bg-Dark-blue text-white hover:bg-white hover:text-Dark-blue"
                            type="submit"
                            disabled={loading ? true : false}
                          >
                            Save product
                          </button>
                        </div>
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
                      <h4 className="text-lg font-medium">Unit</h4>
                      <input
                        onChange={handlechange}
                        name="productUnitCount"
                        value={productCredentials.productUnitCount}
                        placeholder="Product count"
                        className="border-2 lg:w-52 h-10 outline-none text-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="border-2 my-5 lg:w-2/3 px-6 pt-6">
                  <h2 className="text-lg font-medium">Product images</h2>

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
                        id="custom-file"
                        type="file"
                        className="hidden"
                        name="avatar"
                        accept="image/*"
                        onChange={createProductImagesChange}
                        multiple
                      />
                    </label>
                  </div>

                  <div id="createProductFormImage">
                    {imagesPreview.map((image, index) => (
                      <img key={index} src={image} alt="Product Preview" />
                    ))}
                  </div>

                  <button
                    onClick={resetHandler}
                    className="border py-2 px-2 text-Dark-blue hover:bg-Dark-blue hover:text-white "
                  >
                    RESET FIELDS
                  </button>
                  <footer className="text-muted">
                    Creating on - {new Date().toLocaleDateString()}
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductsNew;
