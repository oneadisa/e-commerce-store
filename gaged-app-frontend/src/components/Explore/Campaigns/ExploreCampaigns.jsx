import React from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import MetaData from "../../Layout/metaData";
import CampaignCard from "../../Home/campaignCard";
import { clearErrors, listCampaigns } from "../../../actions/campaignActions";
import Loader from "../../Layout/Loader/Loader";
import Typography from "@material-ui/core/Typography";
import Pagination from "react-js-pagination";
import Header0 from "./Header0";

function ExploreCampaigns() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [campaignCategory, setCampaignCategory] = useState("");

  const {
    campaigns,
    loading,
    error,
    campaignsCount,
    resultPerPage,
    filteredCampaignsCount,
  } = useSelector((state) => state.campaigns);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  let count = filteredCampaignsCount;
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getcampaign(keyword, currentPage, campaignCategory, ratings));
  }, [dispatch, keyword, currentPage, campaignCategory, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="campaignS -- ECOMMERCE" />
          <div className="mx-auto">
            <Header0 />
            <div className="bg-magenta-blue py-14 px-3 lg:px-12 items-center text-center">
              <h1 className="text-2xl md:text-3xl font-bold">
                Explore Campaigns
              </h1>
              <p className="text-lg my-2 font-normal">
                Search and discover campaigns, causes and events on Gaged.
              </p>
              <div className="mt-5">
                <input
                  placeholder="search"
                  className="w-full md:w-3/4 h-10 rounded pl-3 outline-none"
                />
              </div>
              <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-left my-10 md:my-14">
                {campaigns &&
                  campaigns.map((campaign) => (
                    <CampaignCard key={campaign._id} campaign={campaign} />
                  ))}
              </div>
            </div>
          </div>
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={campaignsCount}
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

export default ExploreCampaigns;
