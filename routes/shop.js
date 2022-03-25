// fok importing data
const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
// fok 1) import the product info from the admin js file
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  // fok 2) grab data entered into form
  res.render("shop", { title: "Shopp", products: products });
});

module.exports = router;
