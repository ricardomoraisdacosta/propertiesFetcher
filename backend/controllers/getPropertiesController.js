const { response } = require("express");
const cityProperties = require("../data/properties-2.json");

exports.getProperties = (req,res) =>{
        let parsedProperties  = cityProperties.properties.map((property)=>(
            {
                name: property.name,
                description: property.description,
                lowestPricePerNight : property.lowestPricePerNight.value/7.55,
                overview: property.overview,
                overallRating: (property.overallRating ? property.overallRating.overall/10 : null ) ,
                featured: property.isFeatured,
            }
        ));
    
       let finalProperties = {
           location: cityProperties.location,
           properties: parsedProperties,
       }; 

       res.json(finalProperties);
};




