import React from "react";
import classes from "./Property.module.css";
import featuredLogo from "../../../../assets/featured.png";

const Property = (props) => {
  return (
    <div className={classes.property}>
      <div className={classes.name}>
        {props.property.name}{" "}
        {props.property.featured && <img src={featuredLogo} alt="featured" />}
      </div>
      <div className={classes.rating}>
        Rating: <strong>{props.property.overallRating}</strong>
      </div>
      <div className={classes.price}>
        Lowest Price Per Night:{" "}
        <strong>{props.property.lowestPricePerNight}€</strong>
      </div>
      <div className={classes.address}>
        Address:{" "}
        <strong>
          {props.property.address1} <br />
          {props.property.address2}
        </strong>
      </div>

      <div className={classes.description}>{props.property.overview}</div>
      <div className={classes.filler}></div>
    </div>
  );
};

export default Property;
