import { Request, Response, Router } from "express";
import { FoodCategoryModel } from "../models/food-category";

export const foodCategoryRouter = Router();

foodCategoryRouter.get("/", async (req: Request, res: Response) => {
  const foodCategories = await FoodCategoryModel.find();
  res.json(foodCategories);
});
foodCategoryRouter.post("/", async (req: Request, res: Response) => {
  const newItem = await FoodCategoryModel.create({
    categoryName: req.body.categoryName,
  });
  res.send({
    message: "New category created",
    newItem,
  });
});

foodCategoryRouter.delete("/:id", async (req: Request, res: Response) => {
  const deleteId = req.params.id.trim();
  const categoryJson = await FoodCategoryModel.findByIdAndDelete(deleteId);
  res.send("Deleted category ");
});

foodCategoryRouter.put("/:id", async (req: Request, res: Response) => {
  const updateId = req.params.id.trim();
  const updated = await FoodCategoryModel.findByIdAndUpdate(
    updateId,
    { categoryName: req.body.categoryName },
    { new: true }
  );
  res.json(updated);
});
