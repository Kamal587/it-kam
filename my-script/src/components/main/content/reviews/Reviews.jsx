import React from "react";
import s from "./Reviews.module.css";
import userPhoto from "../../../../assets/images/user.jpg";
import { Navigate, NavLink } from "react-router-dom";


const Reviews = (props) => {
  let pagesNumber = Math.ceil(props.totalCount / props.pageCount);
  let pages = [];
  for (let i = 1; i <= pagesNumber; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            onClick={() => props.setChangePage(p)}
            className={props.pageActiv === p && s.pageActive}
          >
            {p}
          </span>
        );
      })}
      {props.users.map((u) => (
        <div className={s.wrap}>
          <div>
            <div className={s.avatarka}>
              <NavLink to={"/home/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt="ava"
                />
              </NavLink>
            </div>
            <div className={s.name}>{u.name}</div>
            <div className={s.watched}>
              {u.followed ? (
                <button
                  disabled={props.watchedProgress.includes(u.id)}
                  onClick={() => {
                    props.sendWatchedFalse(u.id)
                  }}
                  className={s.watched}
                >
                  Отписаться
                </button>
              ) : (
                <button
                  disabled={props.watchedProgress.includes(u.id)}
                  onClick={() => {
                    props.sendWatchedTrue(u.id)
                  }}
                  className={s.watched}
                >
                  Подписаться
                </button>
              )}
            </div>
          </div>
          <div className={s.status}>{u.status}</div>
          <div className={s.location}>
            <div className={s.city}>City</div>
            <div className={s.country}>Country</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
