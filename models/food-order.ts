import { model, models, Schema } from "mongoose";

const FOOD_ORDER_ITEM_SCHEMA = new Schema({
  food: String,
  quantity: Number,
});

export const FOOD_ORDER_SCHEMA = new Schema(
  {
    user: String,
    totalPrice: Number,
    foodOrderItems: [FOOD_ORDER_ITEM_SCHEMA],
    status: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIVERED"],
      default: "PENDING",
    },
  },
  {
    timestamps: true,
  }
);

const FoodOrderModel =
  models["FoodOrderModel"] || model("FoodOrderModel", FOOD_ORDER_SCHEMA);

export { FoodOrderModel };