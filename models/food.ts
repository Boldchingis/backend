import { model, Schema } from "mongoose";

const FOOD_SCHEMA = new Schema(
  {
    foodName: String,
    image: String,
    price: Number,
    ingredients: String,    
    category: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

const FoodModel = model("Food", FOOD_SCHEMA, "food");

export { FoodModel };