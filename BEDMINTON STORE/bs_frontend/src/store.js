import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "./reducer/productReducer";
import {userLoginReducer,userRegisterReducer} from "./reducer/userReducers";

const userInfoFormstorage=localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")):null

const Reducer = combineReducers({
  productList: productListReducer,
  userLogin:userLoginReducer,
  userRegister:userRegisterReducer,
});


const initialState = {
  userLogin : {userInfo : userInfoFormstorage},
};
const middleware = [thunk];
const store = createStore(
  Reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
const reducer=combineReducers({
  userlogin:userLoginReducer,
})

export default store;
