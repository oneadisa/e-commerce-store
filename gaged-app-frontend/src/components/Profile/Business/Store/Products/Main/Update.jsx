/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useEffect, useState } from "react";
// import { Switch } from "@headlessui/react";
import { useNavigate, useParams } from "react-router-dom";
// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/solid";
import Header from "./Header";
import DashBoard from "./DashBoard";
import Loader from "../../../../../Layout/Loader/Loader";
import GeneralErrorMessage from "../../../../../Layout/Errors/GeneralErrorMessage";
import {
  getProductDetails,
  clearErrors,
  updateStoreProduct,
} from "../../../../../../actions/businessActions";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import MetaData from "../../../../../Layout/metaData";
import { STORE_PRODUCTS_UPDATE_RESET } from "../../../../../../constants/businessConstants";
import {} from "../../../../../../constants/businessConstants";

function UpdateProduct() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let params = useParams();

  const { error, product } = useSelector(
    (state) => state.businessProductDetails
  );
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.businessProduct);

  const business = useSelector((state: RootStateOrAny) => state.business);
  const { businessInfo } = business;

  const [productTitle, setproductTitle] = useState("");
  const [shortDescription, setshortDescription] = useState("");
  const [productDetails, setproductDetails] = useState("");
  const [standardPrice, setstandardPrice] = useState("");
  const [discountedPrice, setdiscountedPrice] = useState("");
  const [price, setprice] = useState(0);
  // const [category, setcategory] = useState("")
  const [productUnitCount, setproductUnitCount] = useState(0);
  const [shippingCost, setshippingCost] = useState(0);

  const alert = useAlert();

  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [oldImages, setOldImages] = useState([]);

  const productId = params.id;

  useEffect(() => {
    if (businessInfo) {
      setshippingCost(businessInfo.shippingCost);
    }
    if (product && product._id !== productId) {
      dispatch(getProductDetails(productId));
    } else {
      setproductTitle(product.productTitle);
      setshortDescription(product.shortDescription);
      setprice(product.price);
      // setcategory(product.category);
      setOldImages(product.images);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Product Updated Successfully");
      navigate("/business/dashboard");
      dispatch({ type: STORE_PRODUCTS_UPDATE_RESET });
    }
  }, [
    dispatch,
    alert,
    error,
    isUpdated,
    productId,
    product,
    updateError,
    businessInfo,
    navigate,
  ]);

  const updateProductSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("productTitle", productTitle);
    myForm.set("standardPrice", standardPrice);
    myForm.set("shortDescription", shortDescription);
    // myForm.set("category", category);
    myForm.set("productUnitCount", productUnitCount);
    myForm.set("shippingCost", shippingCost);
    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(updateStoreProduct(myForm, productId));
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

  // function (e) => setPassword(e.target.value)(event) {
  // const { value, name } = event.target;
  // setProductCredentials((prevValue) => {
  // return {
  // ...prevValue,
  // [name]: value,
  // };
  // });
  // }

  // const resetHandler = () => {

  //  setproductTitle = ""
  // setshortDescription = "",
  // setproductDetails = "",
  // setdiscountedPrice = "",
  // setprice = "",
  // setproductUnitCount= "",
  // setcategory = ""
  // setshippingCost = businessInfo.shippingCost,

  //};

  const [open, setOpen] = useState(false);
  // const [enabled, setEnabled] = useState(false);

  return (
    <Fragment>
      <MetaData title="Update Product" />
      <div className="mx-auto">
        <Header
          handleNav={() => setOpen(!open)}
          button={
            open ? (
              <i className="fas fa-times"> </i>
            ) : (
              <i className="fas fa-bars"> </i>
            )
          }
        />{" "}
        <div className="lg:bg-magenta-blue lg:px-4 h-full">
          <div className="block lg:flex lg:space-x-36">
            <div className="hidden lg:block">
              <DashBoard />
            </div>{" "}
            <div className="lg:hidden"> {open && <DashBoard />} </div>{" "}
            <div className="flex flex-col lg:space-y-10 lg:w-4/5">
              <div className="flex flex-col lg:flex-row px-3 pt-2 gap-2 text-base lg:text-lg font-normal bg-white lg:px-5">
                <div className="flex justify-between lg:gap-10">
                  <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                    Overview{" "}
                  </p>{" "}
                  <p className="p-1 lg:p-2 cursor-pointer border-b-2 border-Dark-blue hover:text-Dark-blue">
                    Products{" "}
                  </p>{" "}
                  <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                    Orders{" "}
                  </p>{" "}
                  <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                    Customers{" "}
                  </p>{" "}
                  <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
                    Reviews{" "}
                  </p>{" "}
                </div>{" "}
                <button className="border border-Dark-blue px-3 mb-2 rounded ml-auto hover:bg-Dark-blue hover:text-white">
                  Visit store{" "}
                </button>{" "}
              </div>{" "}
              {error && (
                <GeneralErrorMessage bg="danger"> {error} </GeneralErrorMessage>
              )}{" "}
              {loading && <Loader />}{" "}
              <div className="px-3 lg:px-8 py-0 lg:py-5 mt-4 lg:mt-10 bg-white">
                <h2 className="text-lg font-medium"> New Product </h2>{" "}
                <div className="mt-5">
                  <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-2 lg:flex-row">
                    <div className="flex flex-col gap-6 border-2 pt-5 lg:pt-8 pb-9 lg:pb-12 px-3 lg:pl-6 lg:pr-14 lg:w-2/3">
                      <div className="flex flex-col gap-2">
                        <label className="text-lg font-normal text-Dark-grey">
                          Product title{" "}
                        </label>{" "}
                        <input
                          onChange={(e) => setproductTitle(e.target.value)}
                          name="productTitle"
                          value={productTitle}
                          className="border-2 h-10 outline-none pl-3"
                        />
                      </div>{" "}
                      <div className="flex flex-col gap-2">
                        <label className="text-lg font-normal text-Dark-grey">
                          Short description{" "}
                        </label>{" "}
                        <input
                          onChange={(e) => setshortDescription(e.target.value)}
                          name="shortDescription"
                          value={shortDescription}
                          className="border-2 h-10 outline-none pl-3"
                        />
                      </div>{" "}
                      <div className="flex flex-col gap-2">
                        <label className="text-lg font-normal text-Dark-grey">
                          Product details{" "}
                        </label>{" "}
                        <textarea
                          onChange={(e) => setproductDetails(e.target.value)}
                          name="productDetails"
                          value={productDetails}
                          className="border-2 h-32 outline-none"
                        />
                      </div>{" "}
                    </div>{" "}
                    <div className="flex gap-5 flex-col lg:w-1/3">
                      {/* <div className="border-2 py-2"> */}
                      {/* <h4 className="text-lg font-medium px-3 py-1"> */}
                      {/* Publish product{" "} */}
                      {/* </h4>{" "} */}
                      {/* <div className="border-t-2 px-3 pt-3"> */}{" "}
                      {/* <p className="text-lg font-normal text-Dark-grey mb-3"> */}{" "}
                      {/* Product status */} {/* </p> */}{" "}
                      {/* <div className="pb-5 flex gap-3"> */} {/* <Switch */}{" "}
                      {/* // checked={enabled} */}{" "}
                      {/* // onChange={setEnabled} */}{" "}
                      {/* // className={`block bg-gray-400 rounded-full shadow border-2 border-transparent h-6 w-12 transition duration-200 ${ */}{" "}
                      {/* // enabled ? "" : "justify-end bg-Dark-blue" */}{" "}
                      {/* // }`} */} {/* // > */}{" "}
                      {/* <span className="block h-full w-6 rounded-full bg-white" /> */}{" "}
                      {/* </Switch> */} {/* <div> */}{" "}
                      {/* <p className="text-lg font-normal text-Dark-grey mb-3"> */}{" "}
                      {/* Draft */} {/* </p> */} {/* </div> */} {/* </div> */}{" "}
                      {/* </div>{" "} */}
                      <div className="flex justify-between mt-4">
                        {" "}
                        {/* <button className="border py-2 px-2 text-Dark-blue hover:bg-Dark-blue hover:text-white "> */}{" "}
                        {/* Preview */} {/* </button> */}{" "}
                        <button
                          onClick={updateProductSubmitHandler}
                          className="border py-2 px-2 bg-Dark-blue text-white hover:bg-white hover:text-Dark-blue"
                          type="submit"
                          disabled={loading ? true : false}
                        >
                          Save product{" "}
                        </button>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="border-2 mt-5 lg:w-2/3 px-3 lg:px-6 pt-6 pb-10">
                <h2 className="text-lg font-medium"> Price and Quantity </h2>{" "}
                <div className="grid grid-rows-1 gap-5 lg:gap-0 lg:grid-cols-3 mt-4">
                  <div className="flex">
                    <div className="border-2 p-2 text-Dark-grey"> $ </div>{" "}
                    <input
                      onChange={(e) => setstandardPrice(e.target.value)}
                      name="standardPrice"
                      value={standardPrice}
                      placeholder="Standard price"
                      className="border-2 pl-4 lg:w-44 outline-none"
                    />
                  </div>{" "}
                  <div className="flex">
                    <div className="border-2 p-2 text-Dark-grey"> $ </div>{" "}
                    <input
                      onChange={(e) => setdiscountedPrice(e.target.value)}
                      name="discountedPrice"
                      value={discountedPrice}
                      placeholder="Discounted price"
                      className="border-2 pl-4 lg:w-44 outline-none"
                    />
                  </div>{" "}
                  <div className="flex">
                    <div className="border-2 p-2 text-Dark-grey"> $ </div>{" "}
                    <input
                      onChange={(e) => setprice(e.target.value)}
                      name="price"
                      value={price}
                      type="number"
                      placeholder="Cost price"
                      className="border-2 pl-4 lg:w-44 outline-none"
                    />
                  </div>{" "}
                </div>{" "}
                <div className="mt-5 grid grid-rows-1 gap-5 lg:gap-0 lg:grid-cols-3">
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium"> Unit </h4>{" "}
                    <input
                      onChange={(e) => setproductUnitCount(e.target.value)}
                      type="number"
                      name="productUnitCount"
                      value={productUnitCount}
                      placeholder="Product count"
                      className="border-2 lg:w-52 h-10 outline-none text-center"
                    />
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="border-2 my-5 lg:w-2/3 px-6 pt-6">
                <h2 className="text-lg font-medium"> Product images </h2>
                <div className="flex  bg-grey-lighter">
                  <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>{" "}
                    <span className="mt-2 text-base leading-normal">
                      Select a file{" "}
                    </span>{" "}
                    <input
                      id="custom-file"
                      type="file"
                      className="hidden"
                      name="avatar"
                      accept="image/*"
                      onChange={createProductImagesChange}
                      multiple
                    />
                  </label>{" "}
                </div>
                <div id="createProductFormImage">
                  {" "}
                  {oldImages &&
                    oldImages.map((image, index) => (
                      <img
                        key={index}
                        src={image.url}
                        alt="Old Product Preview"
                      />
                    ))}{" "}
                </div>
                <div id="createProductFormImage">
                  {" "}
                  {imagesPreview.map((image, index) => (
                    <img key={index} src={image} alt="Product Preview" />
                  ))}{" "}
                </div>
                {/* <button */}
                {/* onClick={resetHandler} */}
                {/* className="border py-2 px-2 text-Dark-blue hover:bg-Dark-blue hover:text-white " */}
                {/* > */}
                {/* RESET FIELDS{" "} */}
                {/* </button>{" "} */}
                <footer className="text-muted">
                  Creating on - {new Date().toLocaleDateString()}{" "}
                </footer>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </Fragment>
  );
}

export default UpdateProduct;
