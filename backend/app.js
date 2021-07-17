const express = require("express");
const app = express();


const getProperties = require("./routes/getPropertiesRoute");

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });

  app.use("/api", getProperties.routes);


const port = 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));