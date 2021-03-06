import { SET_ACTIVE_PANEL } from "../constants/action-types";
import { SET_ITEM_DATA } from "../constants/action-types";
import { SET_CATEGORY_INDEX } from "../constants/action-types";
import { SET_CATEGORY } from "../constants/action-types";
import { ADD_TO_CART } from "../constants/action-types";
import { GO_BACK } from "../constants/action-types";
import { GO_FORWARD } from "../constants/action-types";
import { VIEW_FORWARD } from "../constants/action-types";
import { SET_PHONE_NUMBER } from "../constants/action-types";
import { SET_NAME } from "../constants/action-types";
import { SET_ADDRESS } from "../constants/action-types";

export const setActivePanel = panel => ({ type: SET_ACTIVE_PANEL, payload: panel });
export const setItemData = data => ({ type: SET_ITEM_DATA, payload: data });
export const setCategoryIndex = index => ({ type: SET_CATEGORY_INDEX, payload: index });
export const setCategory = category => ({ type: SET_CATEGORY, payload: category });
export const addToCart = item => ({ type: ADD_TO_CART, payload: item });
export const goBack = () => ({ type: GO_BACK });
export const goForward = () => ({ type: GO_FORWARD });
export const viewForward = newView => ({ type: VIEW_FORWARD, payload: newView });
export const setPhoneNumber = phoneNumber => ({ type: SET_PHONE_NUMBER, payload: phoneNumber });
export const setName = name => ({ type: SET_NAME, payload: name });
export const setAddress = address => ({ type: SET_ADDRESS, payload: address });