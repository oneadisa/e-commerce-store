/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
import { React } from "react";
import Logoh from "../../images/Gaged-images/Gaged-White.svg";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import logout from '../'

function Desktop() {
  // const history = useHistory()
  //logout functionality

  //  const dispatch = useDispatch();

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  // const logoutHandler = () => {
  // dispatch(logout());
  // };

  // useEffect(() => {}, [userInfo]);

  return (
    <div className="flex justify-between items-center mx-auto py-4 md:px-10 lg:px-20 bg-light-blue">
      <Link to="/">
        <img src={Logoh} className="" />
      </Link>{" "}
      <ul className="flex gap-10 md:text-base lg:text-lg font-medium text-center items-center justify-center flex-1">
        <Link to="/explore/campaigns" className="hover:text-Dark-blue">
          Campaigns{" "}
        </Link>{" "}
        <Link to="/explore/stores" className="hover:text-Dark-blue">
          Stores{" "}
        </Link>{" "}
        <Link to="/about" className="hover:text-Dark-blue">
          About{" "}
        </Link>{" "}
      </ul>{" "}
      <div className="flex md:gap-2 lg:gap-3 ml-auto">
        <form className="form flex md:gap-2 lg:gap-3 ml-auto">
          <Link
            to="/login"
            className="py-2 md:px-5 lg:px-7 border border-Dark-blue text-Dark-blue font-medium rounded hover:bg-Dark-blue hover:text-white"
          >
            Log in
          </Link>{" "}
        </form>{" "}
        <Link
          to="/signup"
          className=" py-2 md:px-5 lg:px-7 border border-Dark-blue bg-Dark-blue text-white font-medium rounded hover:bg-white hover:text-Dark-blue"
        >
          Sign up{" "}
        </Link>{" "}
      </div>{" "}
      {/* <Link to="/" onClick={()=> {localStorage.removeItem('businessInfo','userInfo'); history.push("/")}}>  */}{" "}
      {/* Logout  */} {/* </Link>  */}{" "}
    </div>
  );
}

export default Desktop;
