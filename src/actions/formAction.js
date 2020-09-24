export const addForm = (userData) => {
  let formData = {
    forms: {
      user_id: userData.userId,
      form: JSON.stringify(userData.form)
    }
  };
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-User-Email": userData.email,
      "X-User-Token": userData.authenticationToken
    },
    body: JSON.stringify(formData),
  };
  return (dispatch) => {
    dispatch({ type: "USER_LOADING" });
    fetch("http://localhost:3000/v1/forms", configObj)
      .then(res => res.json())
      .then(json =>
        dispatch({ type: "ADD_FORM", payload: json })
      )
      .catch((error) => console.log(error));
  };
};

export const deleteForm = (userData) => {
  let formData = {
    id: userData.formId
  }
  let configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-User-Email": userData.email,
      "X-User-Token": userData.authenticationToken
    },
    body: JSON.stringify(formData),
  };
  return (dispatch) => {
    dispatch({ type: "USER_LOADING" });
    fetch(`http://localhost:3000/v1/forms/${userData.formId}`, configObj)
      .then(dispatch({ type: "DELETE_FORM", payload: userData.formId })
      )
      .catch((error) => console.log(error));
  };
};

export const editForm = (userData) => {
  let formData = {
    id: userData.formId
  }
  let configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-User-Email": userData.email,
      "X-User-Token": userData.authenticationToken
    },
    body: JSON.stringify(formData),
  };
  return (dispatch) => {
    dispatch({ type: "USER_LOADING" });
    fetch(`http://localhost:3000/v1/forms/${userData.formId}`, configObj)
      .then(dispatch({ type: "EDIT_FORM", payload: userData.formId })
      )
      .catch((error) => console.log(error));
  };
};
