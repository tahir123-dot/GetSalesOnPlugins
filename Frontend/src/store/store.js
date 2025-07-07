import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../store/user/Login/loginSlice";
import registerReducer from "../store/user/Register/registerSlice";
import getProductReducer from "../store/product/getProductSlice";
import singleProductReducer from "../store/product/singleProductSlice";
import CartReducer from "./Cart/cartAddSlice";
import wishReducer from "../store/Wishlist/whishSlice";
import cartRemoveReducer from "../store/Cart/cartRemoveSlice";
import cartGetReducer from "../store/Cart/cartGetSlice";
import getUserAddressReducer from "../store/Address/getUserAddressSlice";
import saveOrUpdateAddressReducer from "../store/Address/saveOrUpdateAddressSlice";
import placeOrderReducer from "../store/order/placeOrderSlice";
import orderReducer from "../store/order/orderSlice";
import singleOrderReducer from "../store/order/singleOrderSlice";
import searchReducer from "../store/product/searchSlice";
import filterReducer from "../store/product/filterSlice";
import blogReducer from "../store/Blog/blogSlice";
import wishlistReducer from "../store/product/whishSlice";
import downloadReducer from "../store/Download/downloadSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    getProduct: getProductReducer,
    singleProduct: singleProductReducer,
    Cart: CartReducer,
    Wishlist: wishReducer,
    removeCart: cartRemoveReducer,
    cartData: cartGetReducer,
    getUserAddress: getUserAddressReducer,
    saveOrUpdateAddress: saveOrUpdateAddressReducer,
    placeOrder: placeOrderReducer,
    userOrders: orderReducer,
    userSingleOrders: singleOrderReducer,
    search: searchReducer,
    filters: filterReducer,
    blog: blogReducer,
    Wishlist: wishlistReducer,
    download: downloadReducer,
  },
});

export default store;
