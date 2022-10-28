import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'

const setActive = ({ isActive }) =>(isActive ? s.active : "");

const Navbar = () => {
    return (
      <div className={s.navbar}>
        <div className={s.nav}>
          <div>
            <NavLink to="/home" className={setActive}>Главная</NavLink>
          </div>
          <div>
            <NavLink to="/company" className={setActive}>О компании</NavLink>
          </div>
          <div>
            <NavLink to="/works" className={setActive}>Наши работы</NavLink>
          </div>
          <div>
            <NavLink to="/services" className={setActive}>Услуги</NavLink>
          </div>
          <div>
            <NavLink to="/reviews" className={setActive}>Контакты</NavLink>
          </div>
          <div>
            <NavLink to="/dialogs" className={setActive}>Отзывы</NavLink>
          </div>
          
        </div>
      </div>
    );
}


export default Navbar;
