import React, { useState } from "react";
import style from "./Header.module.css";
import logo from "../../../../images/home-logo.svg";
import search from "../../../../images/search-icon.svg";
import home from "../../../../images/nav-home.svg";
import mynetwork from "../../../../images/nav-network.svg";
import jobs from "../../../../images/nav-jobs.svg";
import message from "../../../../images/nav-messaging.svg";
import notification from "../../../../images/nav-notifications.svg";
import avatar from "../../../../images/user.svg";
import work from "../../../../images/nav-work.svg";
import down from "../../../../images/down-icon.svg";
import {useSelector} from 'react-redux'

const Header = () => {
  const [state, setstate] = useState("home");

  const {user }= useSelector(state => state.user)

  
  return (
    <div className={style.container}>
      <div className={style.left}>
        <img className={style.logo} src={logo} alt="logo" />
        <div className={style.inputBox}>
          <img src={search} alt="search-icon" />
          <input
            className={style.input}
            type="text"
            placeholder="Search for jobs, skills, companies..."
          />
        </div>
      </div>
      <div className={style.right} >
        <div onClick={()=>setstate("home")} className={style.home}>
          <img src={home} alt="home" />
          <p className={`${state === "home" ? style.active : null}`}>Home</p>
        </div>
        <div onClick={()=>setstate("my-network")} className={style.network}>
          <img src={mynetwork} alt="my-network" />
          <p className={`${state === "my-network" ? style.active : null}`}>
            my Network
          </p>
        
        </div>
        <div onClick={()=>setstate("jobs")} className={style.jobs}>
          <img src={jobs} alt="jobs" />
          <p className={`${state === "jobs" ? style.active : null}`}>Jobs</p>
        </div>
        <div onClick={()=>setstate("messaging")} className={style.messaging}>
          <img src={message} alt="Messaging" />
          <p className={`${state === "messaging" ? style.active : null}`}>
            Messaging
          </p>
        </div>
        <div onClick={()=>setstate("notification")} className={style.notification}>
          <img src={notification} alt="notifications" />
          <p className={`${state === "notification" ? style.active : null}`}>
            Notifications
          </p>
        </div>
        <div className={style.avatarBox}>
          <img className={style.avatar} src={user.photoURL} alt="user" />
          <p>
            Me <img className={style.down} src={down} alt="down" />
          </p>
        </div>
        <div className={style.work}>
          <img src={work} alt="work" />
          <p>
            Work <img className={style.down2} src={down} alt="down" />
          </p>
        </div>
        <div>
          <p>
            Try Premium Free <br /> for 1 Month
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
