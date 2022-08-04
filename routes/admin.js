const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/products");

router.get("/admin/add-product", productsController.getAddProduct);

router.post("/admin/add-product", productsController.postAddProduct);

module.exports = router;

// exports.routes = router;
// exports.products = products;
