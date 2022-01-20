const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "admin.html"));
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/shop/");
});

module.exports = router;
