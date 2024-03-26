import React from "react";
import "./Card.css";
import heart from "../../images/heart.svg";

const Card = ({ image, title, price }) => {
  return (
    <div className="item_card">
      <img src={image} alt="" />
      <div>
        <div>
          <h5>{title}</h5>
          <img src={heart} alt="" />
        </div>
        <p> <span style={{textDecoration:"underline"}}>Sign in</span> or Create an account to see pricing</p>
        {/* <p>${price}</p> */}
      </div>
    </div>
  );
};

export default Card;
