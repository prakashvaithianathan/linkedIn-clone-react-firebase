import React from "react";
import style from "./Home.module.css";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Ads from "./components/Ads/Ads";
import Feed from "./components/Feed/Feed";

const Home = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      {!user ? (
        <Login></Login>
      ) : (
        <div>
          <Header></Header>
          <div className={style.contentBox}>
          <Sidebar></Sidebar>
          <Feed></Feed>
          <div className={style.ads}>
          <Ads></Ads>
          </div>
         
          </div>
         
        </div>
      )}
    </div>
  );
};

export default Home;
