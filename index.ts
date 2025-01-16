import { configDotenv } from "dotenv";
import express, { Request, Response } from "express";
import { mongo } from "mongoose";
const mongoose = require("mongoose");

const PORT = 5006;
const app = express();
const cors = require('cors');
app.use(cors()); 

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
    categoryName: String,  
  },
  {
    timestamps: true,  
  }
);

const FoodCategoryModel = mongoose.model(
  "FoodCategory",
  FOOD_CATEGORY_SCHEMA,
  "food_category"
);

app.put("/food-category/:id", async (req: Request, res: Response) => {
 const updatedItem = await FoodCategoryModel.findByIdAndUpdate(
  req.params.id,
  {
    categoryName: req.body.categoryName,
  },
  {new: true}
 );
 res.json(
 updatedItem)
});

app.delete("/food-category/:id", async (req: Request, res: Response) => {
  const deletedItem = await FoodCategoryModel.findByIdAndDelete(req.params.id);
  res.json(deletedItem);
});
app.get("/food-category/:id", (req: Request, res: Response) => {
  FoodCategoryModel.findById(req.params.id)
  .then((category:null) => { 
    if (!category) {
      return res.json({ message: "Category not found" });
    }
    res.json(category); 
  })
});




app.post("/", async (req: Request, res: Response) => {
  const newItem = await FoodCategoryModel.create({
    categoryName:req.body.categoryName,
  });
  res.json({
    message: "New category name is created successfully.",
    newItem,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
