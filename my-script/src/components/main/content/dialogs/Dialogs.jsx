import React from "react";
import s from './Dialogs.module.css'
import ItemDialog from "../../elementsMain/itemDialog/ItemDialog";
import ItemMessage from "../../elementsMain/itemMessage/ItemMessage";
import HomeTextPost from "../../elementsMain/forms/HomeForm/HomeTextPost";



const Dialogs = (props) => {

  const dialogsMap = props.dialogItemsData.map((d) => {
    return <ItemDialog name={d.name} id={d.id} />
  })
  
  const messageMap = props.messageData.map((m) => {
  return <ItemMessage message={m.message} />
  });


  const getNewMessage = (values) => {

    props.addNewMessage(values.name)
    
  }

    return (
      <div className={s.dialogs}>
        <div className={s.items}>
          { dialogsMap }
         
        </div>
        <div className={s.items_dialog}>
          {messageMap}


          <HomeTextPost NewPost={getNewMessage} onSubmit={getNewMessage}/>
          {/* <div>
            <textarea onChange={updateMessage} value ={props.newTextValue} ref={newValueText} name="" id="" cols="25" rows="3"></textarea>
          </div>
          <div>
            <button onClick={getNewMessage}>Отправить</button>
          </div> */}
        </div>
      </div>
    );
}

export default Dialogs;