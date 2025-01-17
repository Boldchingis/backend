import { configDotenv } from "dotenv";
import express, { Request, Response } from "express";
import { mongo } from "mongoose";
import { foodCategoryRouter } from "./router/food-category";
import { foodModel } from "./router/food";
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

app.use("/food-category/", foodCategoryRouter);
// app.use("food/", foodRouter);
app.use("/order/", foodCategoryRouter);

app.get("/food", async (req: Request, res: Response) => {
  const foodNames = await foodModel.find();
  res.json(foodNames);
});
app.post("/food", async (req: Request, res: Response) => {
  const newItem = await foodModel.create({
    foodName: req.body.foodName,
    price: req.body.price,
    ingredients: req.body.ingredients,
  });
  res.send({
    message: "New category created",
    newItem,
  });
});

app.delete("/food/:id", async (req: Request, res: Response) => {
  const foodJson = await foodModel.findByIdAndDelete(req.params.id);
  res.send("deleted lol");
  res.json(foodJson);
});

app.put("/food/:id", async (req: Request, res: Response) => {
  const updateId = req.params.id.trim();
  const updated = await foodModel.findByIdAndUpdate(
    updateId,
    { foodName: req.body.foodName },
    { new: true }
  );
  res.json(updated);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
