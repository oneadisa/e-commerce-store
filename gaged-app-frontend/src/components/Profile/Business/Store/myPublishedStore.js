import React, { Fragment, useEffect } from "react";
import Logof from "../../../../images/logo-footer.jpg";
// import drink1 from "../../../../images/drink1.png";
// import drink2 from "../../../../images/drink2.png";
// import drink3 from "../../../../images/drink3.png";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import MetaData from "../../../Layout/metaData";
import ProductCard from "../../../Home/productCard";
import { clearErrors } from "../../../../actions/businessActions";
import Loader from "../../../Layout/Loader/Loader";
import GeneralErrorMessage from "../../../Layout/Errors/GeneralErrorMessage";

function MyPublishedStore() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const alert = useAlert();

  const { businessInfo, loading, error } = useSelector(
    (state: RootStateOrAny) => state.businessInfo
  );
  useEffect(() => {
    if (!businessInfo) {
      navigate("/");
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error, businessInfo, navigate]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${businessInfo.businessName} -- GAGED`} />
          {error && (
            <GeneralErrorMessage bg="danger">{error}</GeneralErrorMessage>
          )}
          <div className="mx-auto">
            <head className="flex justify-between bg-medium-blue px-2 md:px-4 lg:px-5 py-2">
              <div className="flex space-x-5 lg:space-x-40 h-10">
                <div>
                  <img src={Logof} alt="" className="w-4/5 lg:w-full h-full" />
                </div>
                <input className="w-28 md:w-60 lg:w-96 outline-none pl-1 lg:pl-5" />
              </div>
              <div className="flex gap-2 lg:gap-10 lg:pr-28 ml-auto">
                <div>
                  <p className="text-xl font-normal text-white mt-1">Cart(2)</p>
                </div>
                <div className="w-4 h-4 lg:w-7 lg:h-7 rounded-full bg-Dark-grey mt-3 lg:mt-1" />
              </div>
            </head>
            <div className="items-center text-center">
              <div className="bg-gray-400 py-12 px-4">
                <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold">
                  Store Name
                </h1>
                <p className="text-xl my-3 lg:my-2 font-medium">
                  Tagline, motto or description
                </p>
                <div className="mt-4">
                  <input
                    placeholder="search"
                    className="w-full bg-white md:w-3/4 h-10 rounded pl-3 outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-10 text-left py-6 px-4 lg:py-10 lg:px-20 bg-magenta-blue">
                {businessInfo.storeProducts &&
                  businessInfo.storeProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default MyPublishedStore;
