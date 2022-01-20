// initiating an object where express will store things behind scenes
const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

// this function will run becore every app instance
// next will run when called and go on to next middlewar funcitron in the line (if you don't send response>>  will not go on to next middleware)

app.use((req, res, next) => {
  console.log(404);
  res.status(404).send("<h1>page not found</h1>");
});

app.listen(3000);
