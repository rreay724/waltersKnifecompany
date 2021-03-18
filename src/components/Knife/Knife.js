import React from "react";
import "./knife.css";
import { useStateValue } from "../../contexts/StateProvider";

function FeaturedKnives({ image, title, price }) {
  return (
    <article className="knife">
      {/* <div className="knifeInfo">
        <p>{title}</p>
        <p className="knifePrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} /> */}
      <div className="img-container">
        <img src={image} alt="knife" />
        <div className="price-top">
          <h6>${price}</h6>
        </div>
      </div>
      <p className="knifeName">{title}</p>
    </article>
  );
}

export default FeaturedKnives;
