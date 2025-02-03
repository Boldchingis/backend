"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodCategoryRouter = void 0;
const express_1 = require("express");
const food_category_1 = require("../models/food-category");
exports.foodCategoryRouter = (0, express_1.Router)();
exports.foodCategoryRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodCategories = yield food_category_1.FoodCategoryModel.find();
    res.json(foodCategories);
}));
exports.foodCategoryRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newItem = yield food_category_1.FoodCategoryModel.create({
        categoryName: req.body.categoryName,
    });
    res.send({
        message: "New category created",
        newItem,
    });
}));
exports.foodCategoryRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteId = req.params.id.trim();
    const categoryJson = yield food_category_1.FoodCategoryModel.findByIdAndDelete(deleteId);
    res.send("Deleted category ");
}));
exports.foodCategoryRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updateId = req.params.id.trim();
    const updated = yield food_category_1.FoodCategoryModel.findByIdAndUpdate(updateId, { categoryName: req.body.categoryName }, { new: true });
    res.json(updated);
}));
