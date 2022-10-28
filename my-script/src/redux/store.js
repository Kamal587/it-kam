import messageBranchReducer from "./reducers/messageBranchReducer";
import postBranchReducer from "./reducers/postBranchReducer";

const store = {
   _state: {
    postBranch: {
        postData: [
        {id:1, message: 'Это мой первый пост', LikeCount: 3},
        {id:2, message: 'Здесь написан второй пост', LikeCount: 13},
        {id:3, message: 'Пусть здесь все будет хорошо', LikeCount: 23}
      ],
    },
      
    
    messageBranch: {
        dialogItemsData: [
            {id:1, name: 'John'},
            {id:2, name: 'Alex'},
            {id:3, name: 'Sam'},
            {id:4, name: 'Vary'},
            {id:5, name: 'Frank'}
          ],
        messageData: [
            {id:1, message: 'Hi'},
            {id:2, message: 'How are you'},
            {id:3, message: 'Why always me?'},
            {id:4, message: 'Why always you?'}
          ],
        newTextValue: '',
          
    },
    
},

  getState() {
    return this._state;
  },

  _callRerender() {
    console.log('newState')
  },

  subscriber (observer)  {
    this._callRerender = observer;
  },

  dispatch(action) {
    
    this._state.messageBranch = messageBranchReducer(this._state.messageBranch, action);
    this._state.postBranch = postBranchReducer(this._state.postBranch, action)
    
    this._rerender(this._state)

  }  

}

export default store;

