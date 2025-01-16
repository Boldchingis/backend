import { configDotenv } from "dotenv";
import express, { Request, Response } from "express";
import { mongo } from "mongoose";
import { foodCategoryRouter } from "./router/food-category"
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = 5006;
const app = express();

app.use(cors());
app.use(express.json());

configDotenv();
let cluster: any = null;
const connectMongoDb = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Succesfully connected");
  } catch (error) {
    console.log("failed", error);
  }
};

connectMongoDb();





app.use("/food-category",foodCategoryRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});