/* eslint-disable */
const Fetch_OREDERS = "Fetch_OREDERS";

const initialState = [];

export const fetchOrders = (payload) => ({
  type: Fetch_OREDERS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Fetch_OREDERS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
