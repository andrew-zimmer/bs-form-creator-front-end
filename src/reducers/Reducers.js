const formReducer = (
  state = { forms: [], loading: false, user: { login: false, data: '' } },
  action
) => {
  switch (action.type) {
    case "ADD_FORM":
      return { ...state, forms: [...state.forms, { ...JSON.parse(action.payload.data.form.form), id: action.payload.data.form.id }] };
    case 'DELETE_FORM':
      return { ...state, forms: state.forms.filter(form => form.id !== Number(action.payload)) }
    case 'EDIT_FORM':
      return { ...state, forms: [...state.forms.filter(form => form.id !== action.payload.data.form.id), JSON.parse(action.payload.data.form.form)] }
    case "USER_LOGIN":
      return { ...state, forms: action.payload.data.user.forms.map(form => ({ ...JSON.parse(form.form), id: form.id })), user: { login: true, data: { email: action.payload.data.user.email, id: action.payload.data.user.id, username: action.payload.data.user.username, authenticationToken: action.payload.data.user.authentication_token } } };
    case 'USER_LOGOUT':
      return { forms: [], loading: false, user: { login: false, data: '' } }
    case 'USER_SIGN_UP':
      return { ...state, user: { login: true, data: action.payload.data.user } }
    default:
      return state;
  }
};

export default formReducer;
