import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
// import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

// import axios from "axios";
import "./payment.css";
import { clearErrors, createOrder } from "../../actions/businessActions";

import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector(
    (state: RootStateOrAny) => state.cart
  );
  const { signedUpBusinessInfo } = useSelector(
    (state: RootStateOrAny) => state.signedUpBusinessLogin
  );
  const { signedUpUserInfo } = useSelector(
    (state: RootStateOrAny) => state.signedUpUserLogin
  );
  const { error } = useSelector((state: RootStateOrAny) => state.newOrder);

  // const paymentData = {
  // amount: Math.round(orderInfo.totalPrice * 100),
  // };

  if (signedUpBusinessInfo) {
    var userInfo = {
      name: signedUpBusinessInfo.businessName,
      phoneNumber: signedUpBusinessInfo.phoneNumber,
      email: signedUpBusinessInfo.email,
      pic: signedUpBusinessInfo.pic,
    };
  } else {
    userInfo = {
      name: signedUpUserInfo.firstName + " " + signedUpUserInfo.lastName,
      phoneNumber: signedUpUserInfo.phoneNumber,
      email: signedUpUserInfo.email,
      pic: signedUpUserInfo.pic,
    };
  }

  const order = {
    shippingInfo,
    userInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    const config = {
      public_key: "FLWPUBK-c49999c8b3ae0a1fafe35a4bad31d166-X",
      tx_ref: Date.now(),
      amount: orderInfo.totalPrice,
      currency: "NGN",
      payment_options: "card,mobilemoney,ussd,banktransfer",
      customer: {
        email: userInfo.email,
        phonenumber: userInfo.phoneNumber,
        name: userInfo.name,
      },
      // address: {
      // line1: shippingInfo.address,
      // city: shippingInfo.city,
      // state: shippingInfo.state,
      // postal_code: shippingInfo.pinCode,
      // country: shippingInfo.country,
      // },
      //  handleFlutterPayment({
      //  callback: (response) => {
      //  console.log(response);
      //  closePaymentModal(); // this will close the modal programmatically
      //  },
      //  onClose: () => {},
      //  });

      customizations: {
        title: "Gaged",
        description: "Gaged Checkout",
        logo: "https://www.linkpicture.com/q/Gaged-Blue.svg",
      },
    };

    const handleFlutterPayment = useFlutterwave(config);

    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically

        if (response.status === "successful") {
          order.paymentInfo = {
            id: response.transaction_id,
            status: response.status,
          };
          dispatch(createOrder(order));
          navigate("/success");
        } else {
          alert.error("There's some issue while processing payment ");
        }
      },
      onClose: () => {},
    });

    try {
      // const config = {
      // headers: {
      // "Content-Type": "application/json",
      // },
      // };
      // const { data } = await axios.post(
      // "/api/v1/payment/process",
      // paymentData,
      // config
      // );
      // const client_secret = data.client_secret;
      // if (!stripe || !elements) return;
      // const result = await stripe.confirmCardPayment(client_secret, {
      // payment_method: {
      // card: elements.getElement(CardNumberElement),
      // billing_details: {
      // name: userInfo.name,
      // email: userInfo.email,
      // address: {
      // line1: shippingInfo.address,
      // city: shippingInfo.city,
      // state: shippingInfo.state,
      // postal_code: shippingInfo.pinCode,
      // country: shippingInfo.country,
      // },
      // },
      // },
      // });
      // if (result.error) {
      // payBtn.current.disabled = false;
      // alert.error(result.error.message);
      // } else {
      // if (result.paymentIntent.status === "succeeded") {
      // order.paymentInfo = {
      // id: result.paymentIntent.id,
      // status: result.paymentIntent.status,
      // };
      // dispatch(createOrder(order));
      // navigate("/success");
      // } else {
      // alert.error("There's some issue while processing payment ");
      // }
      // }
    } catch (error) {
      // payBtn.current.disabled = false;
      // alert.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <div className="App">
          <h1>Final Step</h1>
          <button onClick={(e) => SubmitHandler(e)} ref={payBtn}>
            Pay - ₦{orderInfo && orderInfo.totalPrice}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Payment;
