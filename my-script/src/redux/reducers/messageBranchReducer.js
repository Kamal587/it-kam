const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";



let initialState = {
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
}

const messageBranchReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE: 
        const newDataMessage = {
          id: 5,
          message: action.values,
        } 
        return {
          ...state,
          
          messageData: [...state.messageData, newDataMessage]
           
            }
       
        default:
            return state
    }
}


export const addNewMessageCreate = (values) => {
  return {
    
    type: "ADD-NEW-MESSAGE",
    values: values
  };
};

export const updateNewMessageCreate = (text) => {
  
  return {
    type: "UPDATE-NEW-MESSAGE",
    newMessage: text,
  };
};



export default messageBranchReducer;
