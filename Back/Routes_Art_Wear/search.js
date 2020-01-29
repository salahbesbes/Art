const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");

router.get("/products", async (req, res) => {
  try {
    let products = await Product.find();
    res.json(products);
  } catch (err) {
    console.log(err);
  }
});

router.get("/name", async (req, res) => {
  let product = await Product.find({ name: req.body.name });
  res.json(product);
});

router.post("/product", async (req, res) => {
  let product = new Product({
    name: req.body.name,
    price:req.body.price
  });
  let newproduct = await product.save();
  res.json({ newproduct });
});

module.exports = router;
