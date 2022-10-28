import React from "react";
import s from './Header.module.css'
import logo from '../../assets/images/logo.gif'
import { NavLink } from "react-router-dom";

const Header = (props) => {
console.log(props)
    return (
        <div className={s.head}>
            <div className={s.logo}>
                <img src={logo} alt="" />
                <div>АРТ СТУДИЯ</div>
            </div>
            <div className={s.number}>
                <div>Контактный телефон</div>
                <div>8(450) 104-55-66</div>
            </div>
            <button className={s.btn}>ЗАКАЗАТЬ УСЛУГИ</button>
            <button className={s.btnnum}>ОБРАТНЫЙ ЗВОНОК </button>
            <div className={s.auth}>
                {props.isAuth ? <div>{props.login}  <button onClick={props.logoutThunk}>Log out</button></div> :  
                <NavLink to='/login'>Login</NavLink>} 
               
            </div>

        </div>
    )
}

export default Header