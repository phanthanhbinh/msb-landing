import * as express from "express";
import { db } from "../firebase";
const productRouter = express.Router();

productRouter.route("/").get(async (req: any, res) => {
  const snapshot = await db.collection("products").get();
  const products: any = [];

  if (snapshot.empty) {
    console.log("No matching documents.");
  } else {
    snapshot.forEach((doc) => {
      doc.id !== "index" &&
        products.push({
          id: doc.id,
          ...doc.data(),
        });
    });
  }

  res.status(200).json({
    items: products,
  });
});

export { productRouter };
