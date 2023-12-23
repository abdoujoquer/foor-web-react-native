/* eslint-disable */
const Fetch_ACCOUNT = "Fetch_ACCOUNT";

const initialState = "";

export const fetchAccount = (payload) => ({
  type: Fetch_ACCOUNT,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Fetch_ACCOUNT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
