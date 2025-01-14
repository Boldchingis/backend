import { configDotenv } from "dotenv";
import express, { Request, Response } from "express";
import { mongo } from "mongoose";
const mongoose = require("mongoose");

const PORT = 5006;
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
    CategoryName: String,
    FoodName: String,
  },
  {
    Timestamps: true,
  }
);
const FoodCategoryModel = mongoose.model(
  "FoodCategory",
  FOOD_CATEGORY_SCHEMA,
  "food_category"
);

const collection = mongoose.model("food_category", FOOD_CATEGORY_SCHEMA),
  data = {
    CategoryName: "4 hool",
    FoodName: "zagastai shol",
  };
collection.insertMany(data);

app.put("/food-category/;id", async (req: Request, res: Response) => {
  res.json({
    message: "One food category is created.",
  });
});

// app.delete("/food-category/:id", async (req: Request, res: Response) => {
//   FoodCategoryModel.collection("food-category").deleteOne(
//     { id: parseInt(req.params.id) },
//     (error, result) => {
//       if (error) throw error;
//       res.send("Item is deleted");
//     }
//   );
// });
app.delete("/food-category/:id", async (req: Request, res: Response) => {
  const foot = await FoodCategoryModel.findByIdAndDelete(req.params.id);
  res.send("ustlaa");
});

app.get("/", async (req: Request, res: Response) => {
  const FoodCategories = await FoodCategoryModel.find();
  res.json(FoodCategories);
});

app.post("/", async (req: Request, res: Response) => {
  const newItem = await FoodCategoryModel.create({
    foodName: "New category name is created successfully.",
  });
  res.send({
    message: "New category name is created successfully.",
    newItem,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
