const express = require("express");
const mongoose = require("mongoose");
const router = require("./router.js");
const cors = require("cors");

const PORT = 5000;
const DB_URL =
  "mongodb://egorlavrinovich:user@ac-1crtasn-shard-00-00.qdjkfij.mongodb.net:27017,ac-1crtasn-shard-00-01.qdjkfij.mongodb.net:27017,ac-1crtasn-shard-00-02.qdjkfij.mongodb.net:27017/?ssl=true&replicaSet=atlas-ydpl7y-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

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

startApp();
