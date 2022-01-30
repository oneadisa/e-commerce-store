// // // NEW STORE PRODUCT
// export const newBusinessOrderedFrom = (productData) => async (dispatch) => {
//   try {
//     dispatch({ type: NEW_STORE_PRODUCT_REQUEST });

//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };

//     const { data } = await axios.put(
//       `app/business/new-product`,
//       productData,
//       config
//     );

//     dispatch({
//       type: NEW_STORE_PRODUCT_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: NEW_STORE_PRODUCT_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// // Get All BusinessOrderedFrom of a Product
// export const getAllProducts = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: ALL_STORE_PRODUCT_REQUEST });

//     const { data } = await axios.get(`app/business/products`);

//     dispatch({
//       type: ALL_STORE_PRODUCT_SUCCESS,
//       payload: data.products,
//     });
//   } catch (error) {
//     dispatch({
//       type: ALL_STORE_PRODUCT_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// // Delete BusinessOrderedFrom of a Product
// export const deleteBusinessOrderedFrom = (productId, ) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_STORE_PRODUCT_REQUEST });

//     const { data } = await axios.delete(
//       `app/business/products?id=${productId}`
//     );

//     dispatch({
//       type: DELETE_STORE_PRODUCT_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: DELETE_STORE_PRODUCT_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };
