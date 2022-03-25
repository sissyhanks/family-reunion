// initiating an object where express will store things behind scenes
const express = require("express");

var PORT = process.env.PORT || 3000;

const path = require("path");

const bodyParser = require("body-parser");
const expressHBS = require("express-handlebars");

const app = express();

app.engine("handlebars", expressHBS());
app.set("view engine", "handlebars");
app.set("views, views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//the import variable name is admin data >> it pulls in ALL export info >> do dot and then name of export to grab specifically what is needed
//adminData refers to all exports from admin routes file and routes is just the routing logic
app.use("/admin", adminData.routes);
app.use("/shop", shopRoutes);

// this function will run before every app instance
// next will run when called and go on to next middleware function in the line (if you don't send response>>  will not go on to next middleware)

const rootDir = require("./util/path");

app.use((req, res, next) => {
  const products = adminData.products;
  res.status(404).render("404", { pageTitle: "HBS Page Not Found" });
});

app.listen(PORT);

// module.exports = path.dirname(require.main.filename);
