import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "./payment.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import {} from "../../actions/businessActions";

import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const dispatch = useDispatch();
  const alert = useAlert();
  const stripe = useStripe();
  const elements = useElements();
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

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

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

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/v1/payment/process",
        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: userInfo.name,
            email: userInfo.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;

        alert.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          dispatch(createOrder(order));

          navigate("/success");
        } else {
          alert.error("There's some issue while processing payment ");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      alert.error(error.response.data.message);
    }
  };

  const config = {
    public_key: process.env.FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: orderInfo.totalPrice,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: userInfo.email,
      phonenumber: userInfo.phoneNumber,
      name: userInfo.name,
    },
    address: {
      line1: shippingInfo.address,
      city: shippingInfo.city,
      state: shippingInfo.state,
      postal_code: shippingInfo.pinCode,
      country: shippingInfo.country,
    },
    customizations: {
      title: "",
      description: "Gaged Checkout",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };
  const handleFlutterPayment = useFlutterwave(config);
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
          <h1>Welcome</h1>
          <button
            // onClick={() => {
            // handleFlutterPayment({
            // callback: (response) => {
            // console.log(response);
            // closePaymentModal(); // this will close the modal programmatically
            // },
            // onClose: () => {},
            // });
            // }}
            onClick={(e) => submitHandler(e)}
            ref={payBtn}
          >
            Pay - ₦{orderInfo && orderInfo.totalPrice}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Payment;
