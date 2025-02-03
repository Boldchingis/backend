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
exports.foodRouter = void 0;
const express_1 = require("express");
const food_1 = require("../models/food");
exports.foodRouter = (0, express_1.Router)();
exports.foodRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const food = yield food_1.FoodModel.find();
    res.send(food);
}));
exports.foodRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const item = yield food_1.FoodModel.find({ _id: id });
    res.send(item);
}));
exports.foodRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const newFood = yield food_1.FoodModel.create(Object.assign({}, body));
    res.json(newFood);
}));
exports.foodRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { params, body } = req;
    const foodId = params.id;
    const item = yield food_1.FoodModel.find({ _id: foodId });
    const updatedItem = yield food_1.FoodModel.findByIdAndUpdate(foodId, Object.assign({}, body), { new: true });
    res.json(updatedItem);
}));
exports.foodRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodId = req.params.id;
    const deletedFood = yield food_1.FoodModel.findByIdAndDelete(foodId);
    res.send("Deleted this item: " + deletedFood);
}));
