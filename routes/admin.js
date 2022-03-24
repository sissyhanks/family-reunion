// fok logic to save values entered on form
const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

// fok 1) create empty array to push values to
const products = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  // fok 3) push returned info into product... return is an object, so push object
  products.push({ title: req.body.title });
  res.redirect("/shop");
});

//multiple exports from this page with router info as well as form value info.
//instead of module.exports split into exports.variable
//this means that in the routing the exports need to be specificity named for what is needed
//split it up by naming the import of the routes adminData and then dot the name of the export you are grabbing
exports.routes = router;
// fok 2) export saved data
exports.products = products;
