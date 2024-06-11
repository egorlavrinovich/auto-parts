const mongoose = require("mongoose");

// const Post = new mongoose.Schema({
//   partName: { type: String, required: true },
//   carBrand: { type: String, required: true },
//   maker: { type: String, required: true },
//   sum: { type: Number, required: true },
//   available: { type: Number, required: true },
//   delivery: { type: Number },
//   image: { type: String },
// });

const Post = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: Array}
});

module.exports = mongoose.model("Post", Post);
