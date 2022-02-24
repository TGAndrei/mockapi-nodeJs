import express from "express";
import Product from "../models/Products.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    imageURL: req.body.imageURL,
  });

  // save to DB
  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (error) {
    res.json({ message: error });
  }
  console.log("product = ", product);
});

router.delete("/:productId", async (req, res) => {
  console.log(req.params.productId);
  try {
    const productToBeRemove = await Product.deleteOne({
      _id: req.params.productId,
    });
    res.json(productToBeRemove);
  } catch (error) {
    res.json({ mesaj_de_eroare: error });
  }
});

router.put("/:productId", async (req, res) => {
  const productId = req.params.productId;
  await Product.findOneAndUpdate(
    { _id: productId },
    {
      $set: {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        imageURL: req.body.imageURL,
      },
    }
  );
});

export default router;
