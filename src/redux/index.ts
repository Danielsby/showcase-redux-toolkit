import { combineReducers } from "redux";
import {quoteCommander} from "./quoteSlicers";

export default combineReducers({
    quote: quoteCommander.reducer,
});


