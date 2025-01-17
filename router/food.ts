import { Router } from "express";
import { model, Schema } from "mongoose";

const FOOD_SCHEMA = new Schema(
  {
    foodName: String,
    image: String,
    price: Number,
    ingredients: String,
  },
  { timestamps: true }
);

export const foodRouter = Router();
foodRouter.get("/", async (req, res) => {
  const foodModel = model("Food", FOOD_SCHEMA, "food")
  res.send({
    message: "hool nemegdlee ",
  });
});
