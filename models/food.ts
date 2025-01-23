import { model, Schema } from "mongoose";

const FOOD_SCHEMA = new Schema(
  {
    name: String,
    price: Number,
    ingredients: String,
    image: String,
    category: {
      type: Schema.Types.ObjectId,
      ref: "FoodCategory",
    },
  },
  {
    timestamps: true,
  }
);

const FoodModel = model("food", FOOD_SCHEMA, "food");

export { FoodModel };