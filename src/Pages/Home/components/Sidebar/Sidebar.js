import React from "react";
import style from "./Sidebar.module.css";
import card from "../../../../images/card-bg.svg";
import widgetIcon from "../../../../images/widget-icon.svg";
import myItems from "../../../../images/item-icon.svg";
import hashtag from '../../../../images/hashtag-symbol.png'
import plus from '../../../../images/plus-icon.svg'
import { useSelector } from "react-redux";

const Sidebar = () => {
  const {user} = useSelector((state) => state.user);
  return (
    <div>
      <div className={style.topBox}>
        <img src={card} className={style.card} />
        <img className={style.logo} src={user.photoURL} alt="logo" />
        <h3 className={style.name}>Welcome,{user.displayName}</h3>
        <br />
        <div className={style.connection}>
          <p>Connections</p>
          <img src={widgetIcon} alt="widget" className={style.widget} />
          <p className={style.grow}>Grow your network</p>
        </div>
        <br />
        <div className={style.access}>
          <p>Access exclusive tools & insights</p>
          <p className={style.premium}>Try Premium for free</p>
        </div>
        <br />
        <div className={style.items}>
          <img src={myItems} alt="items" />
          <p>My items</p>
        </div>
      </div>

      {/* bottombox */}
      <div className={style.bottomBox}>
        <p className={style.recent}>Recent</p>
        <div className={style.indiastudents}>
        <img src={hashtag} alt="hashtag" className={style.hashtag} />
        <p>indiastudents</p>
        </div>
        <div className={style.india}>
        <img src={hashtag} alt="hashtag" className={style.hashtag} />
        <p>india</p>
        </div>
        <p className={style.groups}>Groups</p>
        <div className={style.events}>
            <p>Events</p>
            <img src={plus} alt="plus" />
        </div>
        <p className={style.followed}>Followed Hashtags</p>
        <div className={style.indiastudents}>
        <img src={hashtag} alt="hashtag" className={style.hashtag} />
        <p>indiastudents</p>
        </div>
        <div className={style.india}>
        <img src={hashtag} alt="hashtag" className={style.hashtag} />
        <p>india</p>
        </div>
        <p className={style.seeAll}>See all</p>
        <p className={style.discover}>Discover more</p>
      </div>
    </div>
  );
};

export default Sidebar;
