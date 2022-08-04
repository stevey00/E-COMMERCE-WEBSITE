const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/products");

// require files
// const adminData = require("./admin");

router.get("/", productsController.getProducts);

module.exports = router;
