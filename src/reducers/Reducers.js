const formReducer = (state = { form: [], loading: true }, action) => {
  switch (action.type) {
    case "ADD_REDUCER":
      return state;
    default:
      return state;
  }
};

export default formReducer;
