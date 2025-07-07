import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../Store/auth/adminSlice.js";
import productReducer from "../Store/Product/ProductSlice.js";
import getProductReducer from "../Store/Product/getProductSlice";
import singleProductReducer from "../Store/Product/singleProdcut/singleProductSlice";
import updateProductReducer from "../Store/Product/updateProduct/updateProductSlice";
import deleteProductReducer from "../Store/Product/deleteProduct/deleteSlice";
import allUsersReducer from "../Store/User/userSlice";
import getSingleOrderReducer from "../Store/Order/userSingleOrdersSlice";
import getAllOrderReducer from "../Store/Order/orderSlice";
import blogReducer from "../Store/Blog/blogSlice";

const store = configureStore({
  reducer: {
    auth: adminReducer,
    product: productReducer,
    getProduct: getProductReducer,
    singleProduct: singleProductReducer,
    updateProduct: updateProductReducer,
    deleteProduct: deleteProductReducer,
    allUsers: allUsersReducer,
    getSingleOrder: getSingleOrderReducer,
    getAllOrdersdata: getAllOrderReducer,
    blog: blogReducer,
  },
});

export default store;
