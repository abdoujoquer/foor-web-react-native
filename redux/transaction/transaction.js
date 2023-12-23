/* eslint-disable */
const Fetch_TRANSACTION = "Fetch_TRANSACTION";

const initialState = [];

export const fetchTransaction = (payload) => ({
  type: Fetch_TRANSACTION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Fetch_TRANSACTION:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
