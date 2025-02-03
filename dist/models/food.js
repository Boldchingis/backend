"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodModel = void 0;
const mongoose_1 = require("mongoose");
const FOOD_SCHEMA = new mongoose_1.Schema({
    name: String,
    price: Number,
    ingredients: String,
    image: String,
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "FoodCategory",
    },
}, {
    timestamps: true,
});
const FoodModel = (0, mongoose_1.model)("food", FOOD_SCHEMA, "food");
exports.FoodModel = FoodModel;
