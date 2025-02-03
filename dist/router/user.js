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
exports.UserRouter = void 0;
const express_1 = require("express");
const user_1 = require("../models/user");
exports.UserRouter = (0, express_1.Router)();
exports.UserRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.UserModel.find();
    res.send(users);
}));
exports.UserRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const user = yield user_1.UserModel.find({ _id: id });
    res.send(user);
}));
exports.UserRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    yield user_1.UserModel.create(Object.assign({}, body));
    const users = yield user_1.UserModel.find();
    res.send(users);
}));
exports.UserRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { params, body } = req;
    const userId = params.id;
    const user = yield user_1.UserModel.find({ _id: userId });
    const updatedUser = yield user_1.UserModel.findByIdAndUpdate(userId, Object.assign(Object.assign({}, user), body), { new: true });
    res.json(updatedUser);
}));
exports.UserRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const deletedUser = yield user_1.UserModel.findByIdAndDelete(userId);
    res.send("Deleted this item: " + deletedUser);
}));
