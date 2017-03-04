import { combineReducers } from "redux";

import loginReducer from "./loginReducer";
import pagesReducer from "./pagesReducer";
import postsReducer from "./postsReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
	loginReducer,	
	pagesReducer,
	postsReducer,
	profileReducer
});