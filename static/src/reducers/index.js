import { combineReducers } from "redux";
import theme from "./theme";
import descriptionVisibility from "./descriptions";


export default combineReducers({
    theme,
    descriptionVisibility
});