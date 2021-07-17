import React from 'react'

const Property = (props) => {
    return (
        <div>
           <li><div>{props.property.featured}</div> <div>{props.property.id}</div><div>{props.property.name}</div> <div>{props.property.overallRating}</div><div>{props.property.lowestPricePerNight}</div>
           <div>{props.property.overview}</div> </li> 
        </div>
    )
}

export default Property
