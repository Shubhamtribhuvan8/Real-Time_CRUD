const express = require("express");
const connection = require("./Config/db");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.listen(process.env.PORT, () => {
  try {
    connection();
    console.log("Server is Running on", `${process.env.PORT}`);
  } catch (err) {
    console.log(err);
  }
});
