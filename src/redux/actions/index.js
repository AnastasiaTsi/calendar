export const setDate = (data) => {
  return {
    type: "SET_DATE",
    payload: data,
  };
};

export const setList = (data) => {
  return {
    type: "SET_LIST",
    payload: data,
  };
};
