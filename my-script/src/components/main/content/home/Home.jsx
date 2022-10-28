import React from "react";
import HomeTextPost from "../../elementsMain/forms/HomeForm/HomeTextPost";
import Loading from "../../elementsMain/loading/Loading";
import Post from "../../elementsMain/post/Post";
import HomeStatus from "../../elementsMain/status/HomeStatus";
import s from "./Home.module.css";



const Home = (props) => {

  const postMap = props.postData.map((p) => {
    return <Post message={p.message} LikeCount={p.LikeCount} />;
  });

  let setNewPost = (values) => {
    props.addNewPost(values.name);
  };


  if(!props.userData) {
    return <Loading />
  }

  return (
    <div className={s.home}>
      {/* <div>
        <img
          src="https://i.ytimg.com/vi/CvXnEEZajLw/maxresdefault.jpg"
          alt=""
        />
      </div> */}
      <div className={s.user}>
        <div className={s.fullUser}>
          <div className={s.userAva}>
            <img src={props.userData.photos.large} alt="" />
          </div>
          <div className={s.fullName}>{props.userData.fullName}</div>
        </div>
        <div className={s.infoUser}>
          
          <div className={s.status}><HomeStatus status ={props.status} updateStatus = {props.updateStatus}/></div>
          <div className={s.contacts}>
            <div>Мой facebook: {props.userData.contacts.facebook}</div>
            <div>Мой сайт: {props.userData.contacts.webcite}</div>
            <div>Моя страничка в ВК: {props.userData.contacts.vk}</div>
            <div>Мой твиттер: {props.userData.contacts.twitter}</div>
            <div>Мой инста: {props.userData.contacts.instagram}</div>
            <div>Мой канал в ютубе: {props.userData.contacts.youtube}</div>
            <div>Мой гит: {props.userData.contacts.github}</div>
            <div>мой Линк: {props.userData.contacts.mainLink}</div>
          </div>
          <div className={s.job}>
            <div>Работа: {props.userData.lookingForAJob ? 'в поисках' : 'уже работаю'}</div> 
            <div>Какую работу я ищу: '{props.userData.lookingForAJobDescription}'</div>
          </div>
        </div>
      </div>

      <div className="MyPosts">
        <div>
          <HomeTextPost NewPost={setNewPost} onSubmit={setNewPost}/>



          {/* <textarea
            onChange={updatePost}
            value={props.changePost}
            ref={newPostElement}
            name=""
            id=""
            cols="50"
            rows="5"
            className={s.text}
          /> */}
          
        </div>
        {postMap}
      </div>
    </div>
  );
};





export default Home;
