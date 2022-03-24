// fok importing data
// rendp rendering in pug
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
  // rendp 1) grab the data you want to render
  const products = adminData.products;
  // in order to be rendered on pug use res.render instead of send file & grab pug file ... also, path des not need to be constructed
  // rendp 2) pass in the data  in as a second argument in render methods it will be available by the page that is rendering it

  res.render("shop", {
    // build object... docTitle is hard coded and prods pulls form the products array built from add-=product page
    docTitle: "Shop",
    prods: products,
  });
});
// rendp 3) pass in the data as an object that will be use as a key name in rendering

module.exports = router;
