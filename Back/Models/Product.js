const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, trim: true },
  price: { type: Number },
  category:{ type: String, trim: true }
});

const Product = mongoose.model("product", ProductSchema);
module.exports = Product
