/* eslint-disable */
const Fetch_PRDUCTS = "Fetch_PRDUCTS";

const initialState = [];

export const fetchProducts = (payload) => ({
  type: Fetch_PRDUCTS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Fetch_PRDUCTS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
