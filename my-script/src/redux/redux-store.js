import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import messageBranchReducer from "./reducers/messageBranchReducer";
import postBranchReducer from "./reducers/postBranchReducer";
import usersBranchReducer from "./reducers/usersBranchReducer";
import authReducer from "./reducers/authReducer";
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    
    postBranch: postBranchReducer,
    messageBranch: messageBranchReducer,
    usersBranch: usersBranchReducer,
    auth: authReducer,
    
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;

export default store;