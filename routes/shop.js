const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("middle");
  res.send("<h1>middle!!</h1>");
});

module.exports = router;
