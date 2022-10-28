import { getApiUsers, getApiWatchFalse, getApiWatchTrue } from "../../api/UsersAPI";

const WATCHED_TRUE = "WATCHED_TRUE";
const UNWATCHED_FALSE = "UNWATCHED_FALSE";
const SET_USERS = "SET_USERS";
const CHECK_PAGE = "CHECK_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const IS_LOADED = "IS_LOADED";
const IS_WATCHED_PROGRES = "IS_WATCHED_PROGRES";

const initialState = {
  users: [],
  totalCount: 0,
  pageCount: 100,
  pageActiv: 1,
  isLoaded: true,
  watchedProgress: [],
};

const usersBranchReducer = (state = initialState, action) => {
  switch (action.type) {
    case WATCHED_TRUE:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.usersId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNWATCHED_FALSE:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.usersId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case CHECK_PAGE:
      return {
        ...state,
        pageActiv: action.page,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.counts,
      };
    case IS_LOADED:
      return {
        ...state,
        isLoaded: action.isLoad,
      };

    case IS_WATCHED_PROGRES:
      return {
        ...state,
        watchedProgress: action.isLoad
            ? [...state.watchedProgress, action.userId]
            : state.watchedProgress.filter(id => id != action.userId)
      };
    default:
      return state;
  }
};




export const sendWatchedTrueSucces = (usersId) => {
  return {
    type: WATCHED_TRUE,
    usersId,
  };
};

export const sendWatchedFalseSucces = (usersId) => {
  return {
    type: UNWATCHED_FALSE,
    usersId,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const checkPage = (page) => {
  return {
    type: CHECK_PAGE,
    page,
  };
};

export const setTotalCount = (counts) => {
  return {
    type: SET_TOTAL_COUNT,
    counts,
  };
};

export const setIsLoad = (isLoad) => {
  return {
    type: IS_LOADED,
    isLoad,
  };
};

export const toggleWatched = (isLoad, userId) => {
  return {
    type: IS_WATCHED_PROGRES,
    isLoad,
    userId
  };
};

export const getUsersThunk = (page, pageActiv, pageCount) => {
  return (dispatch) => {
   
    setIsLoad(true);
    getApiUsers(page, pageActiv, pageCount)
        .then(data => { 
          dispatch(checkPage(page));
          dispatch(setIsLoad(false));
          dispatch(setUsers(data.items));
          dispatch(setTotalCount(data.totalCount))


    })
  }
}

export const sendWatchedFalse = (userId) => {
  return (dispatch) => {
    dispatch(toggleWatched(true, userId));
    getApiWatchFalse(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(sendWatchedFalseSucces(userId));
      }
      dispatch(toggleWatched(false, userId));
    });
  }
}

export const sendWatchedTrue = (userId) => {
  return (dispatch) => {                

    dispatch(toggleWatched(true, userId));
    getApiWatchTrue(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(sendWatchedTrueSucces(userId));
      }
    dispatch(toggleWatched(false, userId));
    });
  }
}

export default usersBranchReducer;
