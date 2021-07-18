const { response } = require("express");
const cityProperties = require("../data/properties-2.json");

exports.getProperties = (req, res) => {
  let parsedProperties = cityProperties.properties.map((property) => ({
    // Remap all info with just the needed info
    id: property.id,
    name: property.name,
    description: property.description,
    lowestPricePerNight: (property.lowestPricePerNight.value / 7.55).toFixed(2),
    overview: property.overview,
    overallRating: property.overallRating
      ? property.overallRating.overall / 10
      : null,
    featured: property.isFeatured,
    address1: property.address1,
    address2: property.address2,
  }));

  let finalProperties = {
    location: cityProperties.location,
    properties: parsedProperties,
  };

  res.json(finalProperties);
};
