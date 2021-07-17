import React from 'react';
import Property from './Property/Property';

const PropertyList
 = (props) => {
   console.log(props) 
   let city;
   let propertyList;
   if(props.cityList.length!==0){
       city= props.cityList.location.city.name;
       propertyList = props.cityList.properties.map((item)=>(
        <Property property={item} city={props.cityList.location} key={"key" + item.id}/>
     ))
   }

 
    return (
        <div>
            <h2>Properties in: {city}</h2>
            {propertyList}
        </div>
    )
};

export default PropertyList
