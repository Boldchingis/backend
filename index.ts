import { configDotenv } from "dotenv";
import express, { Request, Response } from "express";
import { mongo } from "mongoose";
const mongoose = require("mongoose");

const PORT = 5005;
const app = express();

app.use(express.json());

configDotenv();
let cluster = null;
const connectMongoDB = async () => {
  const MONGO_URI = process.env.MONGODB_URI;
  await mongoose.connect(MONGO_URI);
  console.log("done");
};

connectMongoDB();
const FOOD_CATEGORY_SCHEMA = new mongoose.Schema(
  {
FoodName: String,
Price: Number,
Rating: Number
  },
   {
    Timestamps: true
  }
)
const FoodCategoryModel = mongoose.model(
  "FoodCategory",
  FOOD_CATEGORY_SCHEMA,
  "food-category"
)
app.get("/", async (req: Request, res: Response) => {
  const FoodCategories = await FoodCategoryModel.find();
  res.json(FoodCategories);
});
app.get("/create", async (req: Request, res: Response) => {
    const newItem = await FoodCategoryModel.create({
      foodName: "New food name is created successfully."
    });
    res.send({
      message: "New food name is created successfully.",
      newItem 
    });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
