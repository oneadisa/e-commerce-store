/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useState, useEffect } from "react";
import Loader from "../../../../../Layout/Loader/Loader";
import GeneralErrorMessage from "../../../../../Layout/Errors/GeneralErrorMessage";
import { Link, useParams } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import DashBoard from "./DashBoard";
import {
  loadBusiness,
  clearErrors,
  deleteStoreProduct,
} from "../../../../../../actions/businessActions";
import ProductsCard from "../allProductsCard";
import MetaData from "../../../../../Layout/metaData";
import { DELETE_STORE_PRODUCT_RESET } from "../../../../../../constants/businessConstants";

function ProductsAll() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let params = useParams();

  const { error, businessInfo } = useSelector(
    (state: RootStateOrAny) => state.business
  );

  const businessId = params.id;

  const {
    isDeleted,
    loading,
    error: deleteError,
  } = useSelector((state) => state.product);
  useEffect(() => {
    if (!businessInfo) {
      navigate("/");
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }
    if (isDeleted) {
      alert.success("Product Deleted Successfully");
      navigate("/products/all");
      dispatch({ type: DELETE_STORE_PRODUCT_RESET });
    }
    dispatch(loadBusiness());
  }, [dispatch, error, businessInfo, navigate, deleteError, isDeleted]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteStoreProduct(id));
    }
  };
  // const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="My Customers" />
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
            <div className="lg:bg-magenta-blue lg:px-4 h-screen">
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
                    <Link to={`store/${businessId}`}>
                      <button className="border border-Dark-blue px-3 mb-2 rounded ml-auto hover:bg-Dark-blue hover:text-white">
                        Visit store
                      </button>
                    </Link>
                  </div>
                  {error && (
                    <GeneralErrorMessage bg="danger">
                      {error}
                    </GeneralErrorMessage>
                  )}
                  {loading && <Loader />}

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
                      <p className="border-b border-black lg:border-0 py-2">
                        #
                      </p>
                      <p className="border-b border-black lg:border-0 py-2">
                        PRODUCT NAME
                      </p>
                      <p className="border-b border-black lg:border-0 py-2">
                        STOCK
                      </p>
                      <p className="border-b border-black lg:border-0 py-2">
                        PRICE
                      </p>
                      <p className="border-b border-black lg:border-0 py-2">
                        ACTION
                      </p>{" "}
                    </div>
                    <div>
                      {businessInfo.storeProducts &&
                        businessInfo.storeProducts.map((products) => (
                          <ProductsCard
                            key={products._id}
                            products={products}
                            deleteHandler={deleteHandler}
                            params={params}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default ProductsAll;
//  &&
//  storeProducts
//  .filter((filteredstoreProduct) =>
//  filteredstoreProduct.productTitle
//  .toLowerCase()
//  .includes(search.toLowerCase())
//  )
//  .reverse()
