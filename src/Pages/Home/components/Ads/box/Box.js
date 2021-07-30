import React from "react";
import style from "./Box.module.css";

const Box = ({
  title,
  list1,
  list1date,
  list2,
  list2date,
  list3,
  list3date,
  list4,
  list4date,
  more,
  img,
  down
}) => {
  return <div className={style.box}>
      <div className={style.title}>
      <h5>{title}</h5>
      <img src={img} alt="info-logo" />
      </div>
      <ul className={style.list}>
          <div>
          <li>{list1}</li>
          <p className={style.date}>{list1date}</p>
          </div>
          <div>
          <li>{list2}</li>
          <p className={style.date}>{list2date}</p>
          </div>
          <div>
          <li>{list3}</li>
          <p className={style.date}>{list3date}</p>
          </div>
          <div>
          <li>{list4}</li>
          <p className={style.date}>{list4date}</p>
          </div>
      </ul>
      <div className={style.more}>
          <p>{more}</p>
          <img src={down} alt="down" />
      </div>
     
  </div>;
};

export default Box;
