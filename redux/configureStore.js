/* eslint-disable */
// configureStore.js
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import userReducer from "./user/user";
import ProductsReducer from "./products/products";
import StoreReducer from "./store/store";
import AccountReducer from "./account/account";
import OrdersReducer from "./orders/orders";
import TransactionReducer from "./transaction/transaction";

const reducer = {
  user: userReducer,
  products: ProductsReducer,
  store: StoreReducer,
  account: AccountReducer,
  orders: OrdersReducer,
  transaction: TransactionReducer,
};

//i had to change this part of the code, the previous function was deprecated.
// Used the new configureStore function to get the middleware (it already has the thunk, no need to pass it as a parameter)

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
