import React from "react";
import s from './ItemMessage.module.css'


const ItemMessage = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default ItemMessage;