import { getApiHeaderAuthMe, getApiLogin } from "../../api/UsersAPI";

const AUTH_REGIST = "AUTH_REGIST";


let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REGIST:
      return {
        ...state,
        ...action.payload,  
      }
      default:
        return state;
  }
};

export const setAuthRegist = (userId, login, email, isAuth) => {

  return {
    type: AUTH_REGIST,
    payload: {userId, login, email, isAuth}
  };
};

export const authThunk = () => {
  return (dispatch) => {
    getApiHeaderAuthMe()
    .then(data => { 
        if(data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthRegist(id, login, email, true))
        }      
        })
  }
}


export const loginThunk = (email, password, rememberMe, setStatus, setSubmitting) => {
  return (dispatch) => {
    getApiLogin.login(email, password, rememberMe)
    .then(data => { 
      if(data.resultCode === 0) {
        dispatch(authThunk())
      } else {
        setStatus(data.messages)
      };
      setSubmitting(false);
    });
  }
}

export const logoutThunk = () => {
  return (dispatch) => {
    getApiLogin.logout()
    .then(data => { 
      if(data.resultCode === 0) {
        dispatch(authThunk(null, null, null, false))
      }})
  }
}


export default authReducer;
