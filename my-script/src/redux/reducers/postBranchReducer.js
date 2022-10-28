import { getApiHome, getApiStatus, updateApiStatus } from "../../api/UsersAPI";

const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const SET_US_HOME_PAGE = 'SET_US_HOME_PAGE';
const SET_STATUS = 'SET_STATUS'

const initialState = {
    postData: [
        {id:1, message: 'Это мой первый пост', LikeCount: 3},
        {id:2, message: 'Здесь написан второй пост', LikeCount: 13},
        {id:3, message: 'Пусть здесь все будет хорошо', LikeCount: 23}
],
      userData: null,
      status: ''
}

const postBranchReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case ADD_NEW_POST: 
        let newPost = { 
          id: 4,
          message: action.newTextPost,
          LikeCount: 0,
        };
          return {
          ...state,
          
          postData: [...state.postData, newPost]
              
        };
        case SET_US_HOME_PAGE: 
        
        return {
          ...state,
          userData: action.userData
        }
        case SET_STATUS: 
        
        return {
          ...state,
          status: action.status
        }
        default:
            return state;
    }
};

export const addNewPost = (values) => {
   
  return {
    type: ADD_NEW_POST,
    newTextPost: values,
  };
};


export const setUsHomePage = (userData) => {

  return {
    type: SET_US_HOME_PAGE,
    userData
    
  };
};

export const setStatus = (status) => {

  return {
    type: SET_STATUS,
    status
    
  };
};


export const postThunk = (userId) => {
  return (dispatch) => {
    getApiHome(userId)
             .then(data => {
              dispatch(setUsHomePage(data))
   });
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    getApiStatus(userId)
             .then(data => {
              dispatch(setStatus(data))
   });
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    updateApiStatus(status)
              
             .then(data => {
              if(data.resultCode === 0) {
                dispatch(setStatus(status))
              }
              
              
   });
  }
}


export default postBranchReducer;
