import {
  STORE_CREATION_REQUEST,
  STORE_CREATION_SUCCESS,
  STORE_CREATION_FAIL,
} from "../constants/storeConstants";
import axios from "axios";

export const createStore =
  (storeName, tagline, description, link, logo) => async (dispatch) => {
    try {
      dispatch({
        type: STORE_CREATION_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/app/store/create",
        {
          storeName,
          tagline,
          description,
          link,
          logo,
        },
        config
      );

      dispatch({
        type: STORE_CREATION_SUCCESS,
        payload: data,
      });

      dispatch({
        type: STORE_CREATION_SUCCESS,
        payload: data,
      });

      localStorage.setItem("storeInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: STORE_CREATION_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
