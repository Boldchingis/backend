"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodOrderModel = exports.FOOD_ORDER_SCHEMA = void 0;
const mongoose_1 = require("mongoose");
const FOOD_ORDER_ITEM_SCHEMA = new mongoose_1.Schema({
    food: String,
    quantity: Number,
});
exports.FOOD_ORDER_SCHEMA = new mongoose_1.Schema({
    user: String,
    totalPrice: Number,
    foodOrderItems: [FOOD_ORDER_ITEM_SCHEMA],
    status: {
        type: String,
        enum: ["PENDING", "CANCELED", "DELIVERED"],
        default: "PENDING",
    },
}, {
    timestamps: true,
});
const FoodOrderModel = mongoose_1.models["FoodOrderModel"] || (0, mongoose_1.model)("FoodOrderModel", exports.FOOD_ORDER_SCHEMA);
exports.FoodOrderModel = FoodOrderModel;
