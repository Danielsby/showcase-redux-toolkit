import { combineReducers } from "redux";
import {quoteCommander} from "./quoteSlicers";
import {authorReducer} from "./reducers";

export default combineReducers({
    quote: quoteCommander.reducer,
    author: authorReducer,
});


