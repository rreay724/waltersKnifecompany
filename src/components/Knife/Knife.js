import React from "react";
import "./knife.css";
import { useStateValue } from "../../contexts/StateProvider";

function FeaturedKnives({ image, title, price }) {
  return (
    <div className="knife">
      <div className="knifeInfo">
        <p>{title}</p>
        <p className="knifePrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} />
    </div>
  );
}

export default FeaturedKnives;
