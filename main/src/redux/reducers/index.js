import { combineReducers } from "redux";


import main from "./main";
import contents from "./contents";
import modal from "./modal";

export default combineReducers({main,contents, modal});