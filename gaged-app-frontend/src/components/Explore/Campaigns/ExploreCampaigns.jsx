import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import MetaData from "../../Layout/metaData";
import CampaignCard from "../../Home/campaignCard";
import { clearErrors, getBusiness } from "../../../actions/businessActions";
import Loader from "../../Layout/Loader/Loader";
// import Typography from "@material-ui/core/Typography";
// import Pagination from "react-js-pagination";

function ExploreCampaigns() {
  const dispatch = useDispatch();
  // let params = useParams();
  const alert = useAlert();
  // const [currentPage, setCurrentPage] = useState(1);
  // const [campaignCategory, setCampaignCategory] = useState("");

  const {
    businesses,
    loading,
    error,
    // businessesCount,
    // resultPerPage,
    // filteredCampaignsCount,
  } = useSelector((state) => state.businesses);

  // const keyword = params.keyword;

  // const setCurrentPageNo = (e) => {
  // setCurrentPage(e);
  // };

  // let count = filteredCampaignsCount;
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getBusiness());
  }, [dispatch, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Gaged Campaigns" />
          <div className="mx-auto">
            <div className="bg-magenta-blue py-14 px-3 lg:px-12 items-center text-center">
              <h1 className="text-2xl md:text-3xl font-bold">
                Explore Campaigns
              </h1>
              <p className="text-lg my-2 font-normal">
                Search and discover Campaigns, causes and events on Gaged.
              </p>
              <div className="mt-5">
                <input
                  placeholder="search"
                  className="w-full md:w-3/4 h-10 rounded pl-3 outline-none"
                />
              </div>
              <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-left my-10 md:my-14">
                {businesses.listOfCampaignsStarted &&
                  businesses.listOfCampaignsStarted.reverse.map((campaign) => (
                    <CampaignCard key={campaign._id} campaign={campaign} />
                  ))}
              </div>
            </div>
          </div>
          {/* {resultPerPage < count && ( */}
          {/* <div className="paginationBox"> */}
          {/* <Pagination */}
          {/* activePage={currentPage} */}
          {/* itemsCountPerPage={resultPerPage} */}
          {/* totalItemsCount={businessesCount} */}
          {/* onChange={setCurrentPageNo} */}
          {/* nextPageText="Next" */}
          {/* prevPageText="Prev" */}
          {/* firstPageText="1st" */}
          {/* lastPageText="Last" */}
          {/* itemClass="page-item" */}
          {/* linkClass="page-link" */}
          {/* activeClass="pageItemActive" */}
          {/* activeLinkClass="pageLinkActive" */}
          {/* /> */}
          {/* </div> */}
          {/* )} */}
        </Fragment>
      )}
    </Fragment>
  );
}

export default ExploreCampaigns;
