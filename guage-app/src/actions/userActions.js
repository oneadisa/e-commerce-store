import {
    SIGNED_UP_USER_LOGIN_FAIL,
    SIGNED_UP_USER_LOGIN_REQUEST,
    SIGNED_UP_USER_LOGIN_SUCCESS,
    SIGNED_UP_USER_LOGOUT,
    USER_SIGN_UP_FAIL,
    USER_SIGN_UP_REQUEST,
    USER_SIGN_UP_SUCCESS
} from "../constants/userConstants";
import axios from 'axios'
export const userLogin = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type: SIGNED_UP_USER_LOGIN_REQUEST
        });

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        const {
            data
        } = await axios.post(
            "/app/loginUser", {
                email,
                password
            },
            config
        );

        dispatch({
            type: SIGNED_UP_USER_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem("signedUpUserInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: SIGNED_UP_USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        });
    }
};

export const logout = () => async(dispatch) => {
    localStorage.removeItem("signedUpUserInfo");
    dispatch({
        type: SIGNED_UP_USER_LOGOUT
    });
};

export const signUpUser = (firstName, lastName, email, password, pic, phoneNumber) => async(dispatch) => {
    try {
        dispatch({
            type: USER_SIGN_UP_REQUEST
        });

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        const {
            data
        } = await axios.post(
            "/app/signup/2/individual", {
                firstName,
                lastName,
                email,
                password,
                phoneNumber,
                pic
            },
            config
        );

        dispatch({
            type: USER_SIGN_UP_SUCCESS,
            payload: data
        });

        dispatch({
            type: SIGNED_UP_USER_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem("signedUpUserInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_SIGN_UP_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        });
    }
};