import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.message}>
        <div className={s.ava}>
          <img
            src="https://avatars.mds.yandex.net/i?id=9023e8562251172d2e73403ed02315dd-5858046-images-thumbs&n=13"
            alt=""
          />
        </div>
        <div>
          <p>
            {props.message}
          </p>
        </div>
      </div>
      <div className={s.grade}>
        <div>Like{props.LikeCount}</div>
        <button>ОЦЕНИТЬ</button>
        
      </div>
    </div>
  );
};

export default Post;
