/* eslint-disable */
const Fetch_STORE = "Fetch_STORE";

const initialState = "";

export const fetchStore = (payload) => ({
  type: Fetch_STORE,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Fetch_STORE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
