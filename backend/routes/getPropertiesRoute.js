const express = require("express");

const propertiesController = require("../controllers/getPropertiesController");

const router = express.Router();

router.get("/properties", propertiesController.getProperties); // endpoint to get the properties

exports.routes = router;
