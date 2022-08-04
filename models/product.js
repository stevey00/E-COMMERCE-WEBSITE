const fs = require("fs");
const { get } = require("http");
const path = require("path");
const p = path.join(process.mainModule.filename, "../data", "product.json");

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

// const process = require("process");

// console.log(__dirname);
// path.dirname(process.Module.filename);
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
    // const p = path.join(process.mainModule.filename, "../data", "product.json");
    // products.push(this);
    // const p = path.join(__dirname, "./", "data", "product.json");
    // fs.readFile(p, (err, fileContent) => {
    //   let products = [];
    //   //   console.log(fileContent);
    //   //   console.log(JSON);

    //   //   if (!err) {
    //   //     products = JSON.parse(fileContent);
    //   //   }
    // });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
    // return products;
  }
};
