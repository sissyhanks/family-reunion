// initiating an object where express will store things behind scenes
const express = require("express");

const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

// this function will run becore every app instance
// next will run when called and go on to next middlewar funcitron in the line (if you don't send response>>  will not go on to next middleware)

const rootDir = require("./util/path");

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "fourohfour.html"));
});

app.listen(3000);

// module.exports = path.dirname(require.main.filename);
