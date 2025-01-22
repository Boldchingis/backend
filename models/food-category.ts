import { model, Schema } from "mongoose";

const FOOD_CATEGORY_SCHEMA = new Schema(
  {
    categoryName: String,
  },
  { timestamps: true }
);

const FoodCategoryModel = model(
  "Food-category",
  FOOD_CATEGORY_SCHEMA,
  "food-category"
);

export { FoodCategoryModel };
