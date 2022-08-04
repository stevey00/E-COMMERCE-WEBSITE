// Variables
const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  //   console.log("I am a start moving up");
  //   res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    productCSS: true,
    formsCSS: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  //   products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
  //   next();
};

exports.getProducts = (req, res, next) => {
  //   console.log("I am a start");
  //   res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  // const products = adminData.products;
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
    console.log("shop data", products);
  });

  //   next();
};
