const express = require("express");
const mongoose = require("mongoose");
const app = express();
const uri = "mongodb://localhost:27017/shahza";
const myModel = new mongoose.Schema({
  firstname: {
    type: String,
    unique: true,
    required: true,
  },
  lastname: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
});

async function connect() {
  try {
    await mongoose.connect(uri);
    mongoose.model("myModel", myModel);
    console.log("Connected");
  } catch (error) {
    console.error(error);
  }
}
connect();

app.use("/submitform", (req, res) => {
  console.log("req received", req.body);
  if (req.body && Object.keys(req.body)) {
    res.send("Enter your credentials");
  }
});

// Edit user

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
