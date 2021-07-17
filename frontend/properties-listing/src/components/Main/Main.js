
import React, {useEffect,useState} from 'react'

import PropertyList from './PropertyList/PropertyList';

const Main = () => {

    const [cityProperties, setCityProperties] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3001/api/properties").then((response) => response.json()).then(data => {setCityProperties(data);});
    },[]);

    console.log(cityProperties);
    return (
        <div>
            <PropertyList cityList={cityProperties}/>
        </div>
    )
}

export default Main
