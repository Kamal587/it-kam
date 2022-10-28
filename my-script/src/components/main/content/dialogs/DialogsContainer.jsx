import { connect } from "react-redux";
import {
  addNewMessageCreate,
  updateNewMessageCreate,
} from "../../../../redux/reducers/messageBranchReducer";

import Dialogs from "./Dialogs";



let mapStateToProps = (state) => {

  return {
    dialogItemsData: state.messageBranch.dialogItemsData,
    messageData: state.messageBranch.messageData,
    newTextValue: state.messageBranch.newTextValue
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessage: (text) => {
      dispatch(updateNewMessageCreate(text))
    },
      addNewMessage: (values) => {
        dispatch(addNewMessageCreate(values))
      }
    }
  }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
