// fok importing data
const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
// fok 1) import the product info from the admin js file
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // fok 2) grab data entered into form
  console.log(adminData.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
