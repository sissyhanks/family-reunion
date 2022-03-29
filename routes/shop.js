// fok importing data
const path = require("path");

const express = require("express");

// fok 1) import the product info from the admin js file
const adminData = require("./admin");

const router = express.Router();

const shopController = require("../controllers/products");

router.get("/", shopController.getShopInfo);

module.exports = router;
