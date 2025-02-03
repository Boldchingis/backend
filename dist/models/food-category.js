"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodCategoryModel = void 0;
const mongoose_1 = require("mongoose");
const FOOD_CATEGORY_SCHEMA = new mongoose_1.Schema({
    categoryName: String,
}, { timestamps: true });
const FoodCategoryModel = (0, mongoose_1.model)("Food-category", FOOD_CATEGORY_SCHEMA, "food-category");
exports.FoodCategoryModel = FoodCategoryModel;
