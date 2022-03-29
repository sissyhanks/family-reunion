// initiating an object where express will store things behind scenes
const express = require("express");

var PORT = process.env.PORT || 3000;

const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const fofController = require("./controllers/404");

const bodyParser = require("body-parser");
// const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//the import variable name is admin data >> it pulls in ALL export info >> do dot and then name of export to grab specifically what is needed
//adminData refers to all exports from admin routes file and routes is just the routing logic
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

// this function will run before every app instance
// next will run when called and go on to next middleware function in the line (if you don't send response>>  will not go on to next middleware)

const rootDir = require("./util/path");

app.use(fofController.get404);

app.listen(PORT);

// module.exports = path.dirname(require.main.filename);
