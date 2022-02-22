import express from "express";

const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello MockApi Node JS!");
});
app.get("/products", (req, res) => {
  res.send("Hello from /products endpoint");
});

app.listen(3000);
