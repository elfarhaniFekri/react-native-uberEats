import { combineReducers } from "redux";
import cartReducers from "./cartReducers";

const reducers = combineReducers({
    addToCart : cartReducers,
});

export default reducers;