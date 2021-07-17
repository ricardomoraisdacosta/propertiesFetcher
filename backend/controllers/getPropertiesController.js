const { response } = require("express");
const properties = require("../data/properties-2.json");

exports.getProperties = (req,res) =>{
        res.json(properties);
};




