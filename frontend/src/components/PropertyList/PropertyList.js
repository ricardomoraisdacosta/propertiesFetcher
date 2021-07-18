import React, { useEffect, useState } from "react";
import Property from "./Property/Property";
import classes from "./PropertyList.module.css";

const PropertyList = (props) => {
  const [cityProperties, setCityProperties] = useState([]); // state For Properties List  (if there is a change in the properties it will re-render)
  const [fetchingData, setFetchingData] = useState(false); //State For Loading
  useEffect(() => {
    setFetchingData(true); // set Loading state in true
    fetch("http://localhost:3001/api/properties")
      .then((response) => response.json())
      .then((data) => {
        setCityProperties(data);
        setFetchingData(false); // set Loading state in false
      });
  }, []);

  let city;
  let propertyList;
  if (cityProperties.length !== 0) {
    // if the cityProperties exists
    city = cityProperties.location.city.name;
    propertyList = cityProperties.properties.map((item) => (
      <Property
        property={item}
        city={cityProperties.location}
        key={"key" + item.id}
      />
    ));
  }

  return (
    <div className={classes.propertyList}>
      {fetchingData && <p>Loading data...</p>}
      {!fetchingData && <h1>Properties in {city}</h1>}
      {!fetchingData && propertyList}
      {!fetchingData && !cityProperties.properties && (
        <p>Properties not Found</p>
      )}
    </div>
  );
};

export default PropertyList;
