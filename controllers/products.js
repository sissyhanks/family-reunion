exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    title: "Add Product",
    product: true,
    add: true,
    store: false,
  });
};
