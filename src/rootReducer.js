import { combineReducers } from "redux";
import auth from "./reducer/auth";
import references from "./reducer/references";
import menus from "./reducer/menus";

export default combineReducers({
  auth,
  references,
  menus,
});
