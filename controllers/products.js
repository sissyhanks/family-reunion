// fok 1) create empty array to push values to
// so, since we are movign logic to this page, the array needs to be added to this page to be able to push to
products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    title: "Add Product",
    product: true,
    add: true,
    store: false,
  });
};

exports.postAddProduct = (req, res) => {
  console.log(req.body);
  // fok 3) push returned info into product... return is an object, so push object
  products.push({ title: req.body.title });
  res.redirect("/shop");
};

exports.getShopInfo = (req, res, next) => {
  // fok 2) grab data entered into form
  res.render("shop", {
    title: "Shop",
    products: products,
    add: false,
    store: true,
  });
};
