// fok importing data
const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
// fok 1) import the product info from the admin js file
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // fok 2) grab data entered into form
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  // in order to be rendered on pug use res.render instrad of send file & grab pug file ... anmed path des not need to be constructewd
  res.render("shop");
});

module.exports = router;
