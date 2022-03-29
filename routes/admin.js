// fok logic to save values entered on form
const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

//multiple exports from this page with router info as well as form value info.
//instead of module.exports split into exports.variable
//this means that in the routing the exports need to be specificity named for what is needed
//split it up by naming the import of the routes adminData and then dot the name of the export you are grabbing
module.exports = router;
// fok 2) export saved data
// exports.products = products;
