import React from "react";
import Property from "./Property/Property";
import classes from "./PropertyList.module.css";

const PropertyList = (props) => {
  console.log(props);
  let city;
  let propertyList;
  if (props.cityList.length !== 0) {
    city = props.cityList.location.city.name;
    propertyList = props.cityList.properties.map((item) => (
      <Property
        property={item}
        city={props.cityList.location}
        key={"key" + item.id}
      />
    ));
  }

  return (
    <div className={classes.propertyList}>
      <h1>Properties in {city}</h1>
      {propertyList}
    </div>
  );
};

export default PropertyList;
