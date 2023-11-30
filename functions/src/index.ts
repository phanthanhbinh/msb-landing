import * as functions from "firebase-functions";
import express from "express";
import compression from "compression";
import bodyParser = require("body-parser");
import cors from "cors";
import { userRouter } from "./routers/users";
import { productRouter } from "./routers/products";

const app = express();

app.use(bodyParser.json());
app.use(compression());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Routers
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

exports.app = functions.https.onRequest(app);

// Trigger
