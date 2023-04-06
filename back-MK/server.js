const express = require("express");
const app = express();
const path = require("path");
/** routes */
const crewPage = require("./pages/crew");
const customerPage = require("./pages/customer");

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "front-MK/build")));

/** body-parser */
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** router */
app.use("/api/customer", customerPage);
app.use("/api/crew", crewPage);

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/fron-MK/build/index.html"));
});

/** server listener */
app.listen("5000", () => {
  console.log("server running on port 5000");
});
