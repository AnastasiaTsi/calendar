const setDate = (state = [], action) => {
  switch (action.type) {
    case "SET_DATE":
      return action.payload;
    case "EDIT_DATE":
      state = 0;
      return action.payload;
    default:
      return state;
  }
};

export default setDate;
