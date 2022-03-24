// initiating an object where express will store things behind scenes
const express = require("express");

const path = require("path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");

const app = express();

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
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);

// module.exports = path.dirname(require.main.filename);
