import {
    BUSINESS_SIGN_UP_FAIL,
    BUSINESS_SIGN_UP_REQUEST,
    BUSINESS_SIGN_UP_SUCCESS,
    SIGNED_UP_BUSINESS_LOGIN_FAIL,
    SIGNED_UP_BUSINESS_LOGIN_REQUEST,
    SIGNED_UP_BUSINESS_LOGIN_SUCCESS,
    SIGNED_UP_BUSINESS_LOGOUT
} from "../constants/businessConstants";
import axios from 'axios'

export const businessLogin = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type: SIGNED_UP_BUSINESS_LOGIN_REQUEST
        });

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        const {
            data
        } = await axios.post(
            "/app/loginBusiness", {
                email,
                password
            },
            config
        );

        dispatch({
            type: SIGNED_UP_BUSINESS_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem("signedUpBusinessInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: SIGNED_UP_BUSINESS_LOGIN_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        });
    }
};

export const logout = () => async(dispatch) => {
    localStorage.removeItem("signedUpUserInfo");
    dispatch({
        type: SIGNED_UP_BUSINESS_LOGOUT
    });
};

export const signUpBusiness = (businessName, accountHolderName, email, password, phoneNumber, pic) => async(dispatch) => {
    try {
        dispatch({
            type: BUSINESS_SIGN_UP_REQUEST
        });

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        const {
            data
        } = await axios.post(
            "/app/signup/2/business", {
                businessName,
                accountHolderName,
                pic,
                phoneNumber,
                email,
                password
            },
            config
        );

        dispatch({
            type: BUSINESS_SIGN_UP_SUCCESS,
            payload: data
        });

        dispatch({
            type: SIGNED_UP_BUSINESS_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem("signedUpBusinessInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: BUSINESS_SIGN_UP_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        });
    }
};