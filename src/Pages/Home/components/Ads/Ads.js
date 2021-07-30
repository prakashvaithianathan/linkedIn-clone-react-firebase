import React from "react";
import style from "./Ads.module.css";
import Box from "./box/Box";
import feed from "../../../../images/feed-icon.svg";
import down from "../../../../images/down-icon.svg";
import logo from '../../../../images/login-logo.svg'

const Ads = () => {
  return (
    <div className={style.container}>
      <Box
        title="LinkedIn News"
        img={feed}
        list1="Boosting women entrepreneurship"
        list1date="1d ago . 800 readers"
        list2="A new airline is coming"
        list2date="1d ago . 8,380 readers"
        list3="Feeling stressed? Best to speak up"
        list3date="1d ago . 380 readers"
        list4="Carreer switch: What stops you?"
        list4date="8h ago . 240 readers"
        more="Show more"
        down={down}
      ></Box>
      <Box
        title="Today's top courses"
        img={feed}
        list1="Agile Foundations"
        list1date="Doug Rose"
        list2="Communication Foundations"
        list2date="Brenda Bailey-Hughes and Tatiana Kolovou"
        list3='Communicating with Confidence'
        list3date='Jeff Ansell'
        list4='Full Stack Web Development'
        list4date='react'
        more='Show more on LinkedIn Learning'
        down={down}
      ></Box>
      <div className={style.bottom}>
          <div className={style.firstLine}>
              <p>About</p>
              <p>Accessibility</p>
              <p>Help Center</p>
          </div>
          <div className={style.secondLine}>
              <p>Privacy & Terms </p>
              <p>Ad Choices</p>
          </div>
          <div className={style.thirdLine}>
               <p>Advertising</p>
               <p>Business Services</p>
          </div>
          <div className={style.fourthLine}>
               <p>Get the LinkedIn app</p>
               <p>More</p>
          </div>
          <div className={style.fifthLine}>
              <img src={logo} alt="logo" className={style.logo}/>
              <p>LinkedIn Corporation © 2021</p>
          </div>
      </div>
    </div>
  );
};

export default Ads;
