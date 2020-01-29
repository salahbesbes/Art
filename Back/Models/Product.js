const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String },
  price: { type: String },
  
});
module.exports = Product = mongoose.model("product", ProductSchema);
