const initialState = [];
const visibilityFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW-ALL":
      return {};
    case "SHOW-ACTIVE":
      return {};
    case "SHOW-COMPLETED":
      return {};
    default:
      return state;
  }
};
