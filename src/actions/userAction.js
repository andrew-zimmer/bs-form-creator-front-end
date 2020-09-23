export const userLogin = (userInfo) => {
  let formData = {
    email: userInfo.email,
    password: userInfo.password,
  };
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };
  return (dispatch) => {
    dispatch({ type: "USER_LOADING" });
    fetch("http://localhost:3000/v1/sessions", configObj)
      .then((res) => res.json())
      .then((json) => {
        dispatch({ type: "USER_LOGIN", payload: json });
      })
      .catch((error) => console.log(error));
  };
};

export const userLogout = (userId) => {
  let formData = {
    id: userId
  };
  let configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };
  return (dispatch) => {
    dispatch({ type: "USER_LOADING" });
    fetch("http://localhost:3000/v1/sessions", configObj)
      .then(
        dispatch({ type: "USER_LOGOUT" })
      )
      .catch((error) => console.log(error));
  };
};

export const userSignUp = (userInfo) => {
  let formData = {
    user: {
      email: userInfo.email,
      password: userInfo.password,
      password_confirmation: userInfo.passwordConfimation,
      username: userInfo.username
    }
  }
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  }
  return (dispatch) => {
    dispatch({ type: "USER_LOADING" });
    fetch("http://localhost:3000/v1/users", configObj)
      .then((res) => res.json())
      .then((json) => {
        dispatch({ type: "USER_SIGN_UP", payload: json });
      })
      .catch((error) => console.log(error));
  };
}
