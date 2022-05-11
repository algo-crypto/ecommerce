import express from "express";
import data from "./data.js";

// creat express app

const app = express();
app.get("/api/products", (req, res) => {
  // send data to frontend
  res.send(data.products);
});

// define port that we'll be listening on
// chose a port else chose port 5000
const port = process.env.PORT || 5000;
// call app.listen method
app.listen(port, () => {
  console.log(`server listening on  http://localhost:${port}`);
});
