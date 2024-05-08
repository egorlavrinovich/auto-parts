const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  partName: { type: String, required: true },
  carBrand: { type: String, required: true },
  maker: { type: String, required: true },
  sum: { type: Number, required: true },
  available: { type: Number, required: true },
  delivery: { type: Number },
});

module.exports = mongoose.model("Product", Product);
