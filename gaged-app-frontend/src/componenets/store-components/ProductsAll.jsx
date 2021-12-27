/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
// import React, { useState, useEffect } from "react";
// import { Accordion, Badge, Button, Card } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import Loader from "../../componenets/Loader";
// import GeneralErrorMessage from "../../componenets/GeneralErrorMessage";
// import ReactMarkdown from "react-markdown";
// import { Link } from "react-router-dom";
// import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Header from "./Header"
// import DashBoard from "./DashBoard";

// import {
//   listStoreProducts,
//   deleteStoreProductAction,
// } from "../../actions/storeProductsActions";

// function ProductsAll() {
//   const dispatch = useDispatch();
//   let navigate = useNavigate();

//   const storeProductsList = useSelector(
//     (state: RootStateOrAny) => state.storeProductsList
//   );
//   const { loading, error, storeProducts } = storeProductsList;

//   const signedUpBusinessLogin = useSelector(
//     (state: RootStateOrAny) => state.signedUpBusinessLogin
//   );
//   const { signedUpBusinessInfo } = signedUpBusinessLogin;

//   const storeProductDelete = useSelector(
//     (state: RootStateOrAny) => state.storeProductDelete
//   );
//   const {
//     loading: loadingDelete,
//     error: errorDelete,
//     success: successDelete,
//   } = storeProductDelete;

//   const storeProductCreate = useSelector(
//     (state: RootStateOrAny) => state.storeProductCreate
//   );
//   const { success: successCreate } = storeProductCreate;

//   const storeProductUpdate = useSelector(
//     (state: RootStateOrAny) => state.storeProductUpdate
//   );
//   const { success: successUpdate } = storeProductUpdate;

//   useEffect(() => {
//     dispatch(listStoreProducts());
//     if (!signedUpBusinessInfo) {
//       navigate("/");
//     }
//   }, [
//     dispatch,
//     navigate,
//     signedUpBusinessInfo,
//     successDelete,
//     successCreate,
//     successUpdate,
//   ]);

//   const deleteHandler = (id) => {
//     if (window.confirm("Are you sure?")) {
//       dispatch(deleteStoreProductAction(id));
//     }
//   };

//   const [search, setSearch] = useState("");
//   console.log(search);

//   const [open, setOpen] = useState(false);


  // photos.forEach((photo, index) => {
  // photo.serial = index + 1;
  // });

//   return (
//       <div className="mx-auto">
//         <Header 
//           handleNav = {() => setOpen(!open)}
//           button = {open ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)} 
//         />
//         <div className="lg:bg-magenta-blue lg:px-4 h-screen">
//           <div className="block lg:flex lg:space-x-36">
//             <div className='hidden lg:block'>
//               <DashBoard />
//             </div>
//             <div className='lg:hidden'>
//               {open && <DashBoard />}
//             </div>
//             <div className="flex flex-col lg:space-y-10 lg:w-4/5">
//               <div className="flex flex-col lg:flex-row px-3 pt-2 gap-2 text-base lg:text-lg font-normal bg-white lg:px-5">
//                 <div className="flex justify-between lg:gap-10">
//                   <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
//                     Overview
//                   </p>
//                   <p className="p-1 lg:p-2 cursor-pointer border-b-2 border-Dark-blue hover:text-Dark-blue">
//                     Products
//                   </p>
//                   <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
//                     Orders
//                   </p>
//                   <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
//                     Customers
//                   </p>
//                   <p className="p-1 lg:p-2 cursor-pointer hover:text-Dark-blue">
//                     Reviews
//                   </p>
//                 </div>

//                 <button className="border border-Dark-blue px-3 mb-2 rounded ml-auto hover:bg-Dark-blue hover:text-white">
//                   <Link to="">Visit store </Link>
//                 </button>
//               </div>
//               {error && (
//                 <GeneralErrorMessage bg="danger">{error}</GeneralErrorMessage>
//               )}
//               {errorDelete && (
//                 <GeneralErrorMessage bg="danger">
//                   {errorDelete}
//                 </GeneralErrorMessage>
//               )}
//               {loading && <Loader />}
//               {loadingDelete && <Loader />}
//               <div className="flex flex-col p-5 mt-10 bg-white h-auto lg:h-96">
//                 <div className="flex">
//                   <h3 className="font-semibold text-xl mt-1 lg:mt-2">
//                     All Products
//                   </h3>

//                   <button className="ml-auto bg-Dark-blue border border-Dark-blue text-white py-2 px-4 font-normal text-base hover:bg-white hover:text-Dark-blue">
//                     <Link to="/store/products/new">New Product</Link>
//                   </button>
//                 </div>
//                 <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-between lg:border-b border-black mt-10 pb-2 px-2">
//                   <p className="border-b border-black lg:border-0 py-2">#</p>
//                   <p className="border-b border-black lg:border-0 py-2">
//                     PRODUCT NAME
//                   </p>
//                   <p className="border-b border-black lg:border-0 py-2">
//                     CATEGORY
//                   </p>
//                   <p className="border-b border-black lg:border-0 py-2">STOCK</p>
//                   <p className="border-b border-black lg:border-0 py-2">PRICE</p>
//                   <p className="border-b border-black lg:border-0 py-2">STATUS</p>
//                   <p className="border-b border-black lg:border-0 py-2">
//                     ACTION
//                   </p>{" "}
//                 </div>
//                 <div>
//                   {storeProducts
//                     ?.reverse()
//                     .filter((filteredstoreProduct) =>
//                       filteredstoreProduct.productTitle
//                         .toLowerCase()
//                         .includes(search.toLowerCase())
//                     )
//                     .map((storeProduct) => (
//                       <>
//                         <div key={storeProduct._id}>
//                           <p>{storeProduct.productTitle}</p>
//                           <p>{storeProduct.shortDescription}</p>
//                           <p>{storeProduct.productDetails}</p>
//                           <p>{storeProduct.standardPrice}</p>
//                           <p>{storeProduct.discountedPrice}</p>
//                           <p>{storeProduct.costPrice}</p>
//                           <p>{storeProduct.productStockCount}</p>
//                           <p>{storeProduct.productUnitCount}</p>
//                           <p>{storeProduct.productSKU}</p>
//                           <p>{storeProduct.productImageOne}</p>
//                           <p>{storeProduct.productImageTwo}</p>
//                           <p>{storeProduct.productImageThree}</p>
//                           <p>{storeProduct.category}</p>
//                           <div>
//                             <a href={"/store/products/" + storeProduct._id}>
//                               Edit
//                             </a>
//                             <Button
//                               variant="danger"
//                               className="mx-2"
//                               onClick={() => deleteHandler(storeProduct._id)}
//                             >
//                               Delete
//                             </Button>
//                             <footer className="blockquote-footer">
//                               Created on{" "}
//                               <cite title="Source Title">
//                                 {storeProduct.createdAt.substring(0, 10)}
//                               </cite>
//                             </footer>
//                           </div>
//                         </div>
//                       </>
//                     ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// }

// export default ProductsAll;

// &&
// storeProducts
// .filter((filteredstoreProduct) =>
// filteredstoreProduct.productTitle
// .toLowerCase()
// .includes(search.toLowerCase())
// )
// .reverse()
