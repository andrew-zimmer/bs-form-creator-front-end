const formReducer = (
  state = { forms: [], loading: true, user: { login: false, data: '' } },
  action
) => {
  switch (action.type) {
    case "ADD_FORM":
      return { ...state, forms: [...state.forms, action.payload] };
    case "USER_LOGIN":
      console.log(action.payload.data.user);
      return { ...state, user: { login: true, data: action.payload.data.user } };
    case 'USER_LOGOUT':
      console.log('logged out')
      return { forms: [], loading: false, user: { login: false, data: '' } }
    case 'USER_SIGN_UP':
      console.log(action.payload.data.user)
      return { ...state, user: { login: true, data: action.payload.data.user } }
    default:
      return state;
  }
};

export default formReducer;
