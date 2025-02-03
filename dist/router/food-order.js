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
exports.FoodOrderRouter = void 0;
const express_1 = require("express");
const food_order_1 = require("../models/food-order");
exports.FoodOrderRouter = (0, express_1.Router)();
exports.FoodOrderRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodOrder = yield food_order_1.FoodOrderModel.find();
    res.send(foodOrder);
}));
exports.FoodOrderRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const item = yield food_order_1.FoodOrderModel.find({ _id: id });
    res.send(item);
}));
exports.FoodOrderRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customReq = req;
    const user = customReq === null || customReq === void 0 ? void 0 : customReq.userId;
    const { foodOrderItems, totalPrice } = req.body;
    const order = { user, foodOrderItems, totalPrice };
    const newOrder = yield food_order_1.FoodOrderModel.create(order);
    res.json(newOrder);
}));
exports.FoodOrderRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { params, body } = req;
    const foodOrderId = params.id;
    const item = yield food_order_1.FoodOrderModel.find({ _id: foodOrderId });
    const updatedItem = yield food_order_1.FoodOrderModel.findByIdAndUpdate(foodOrderId, Object.assign(Object.assign({}, item), body), { new: true });
    res.json(updatedItem);
}));
exports.FoodOrderRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodOrderId = req.params.id;
    const deletedFoodOrder = yield food_order_1.FoodOrderModel.findByIdAndDelete(foodOrderId);
    res.send("Deleted this item: " + deletedFoodOrder);
}));
