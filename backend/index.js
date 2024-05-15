const express = require("express");
const mongoose = require("mongoose");
const router = require("./router.js");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

const app = express();
app.use(cors());

app.use(express.json());
app.use("", router);

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log("Sever started"));
  } catch (error) {
    console.log(error);
  }
};

console.log(DB_URL);

startApp();

module.exports = app;
