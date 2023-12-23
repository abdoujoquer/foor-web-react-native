/* eslint-disable */

import AsyncStorage from "@react-native-async-storage/async-storage";

const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

const initialState = {
  user: null,
};

export const loginUser = (payload) => async (dispatch) => {
  await AsyncStorage.setItem("token", payload);
  dispatch({
    type: LOGIN_USER,
    payload,
  });
};

export const logoutUser = () => async (dispatch) => {
  await AsyncStorage.removeItem("token");
  dispatch({
    type: LOGOUT_USER,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default reducer;
