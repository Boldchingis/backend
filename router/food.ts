import { Request, Response, Router } from "express";
import { FoodModel } from "../models/food";

export const foodRouter = Router();

foodRouter.get("/", async (req: Request, res: Response) => {
  const foodCategories = await FoodModel.find();
  res.json(foodCategories);
});
foodRouter.post("/", async (req: Request, res: Response) => {
  const newItem = await FoodModel.create({
    foodName: req.body.foodName,
    image: req.body.image,
    price: req.body.price,
    ingredients: req.body.ingredients,
  });
  res.send(newItem);
});

foodRouter.delete("/", async (req: Request, res: Response) => {
  const deleteId = req.body.id;
  const categoryJson = await FoodModel.findByIdAndDelete(deleteId);
  res.send("deleted");
  res.json(categoryJson);
});

foodRouter.put("/:id", async (req: Request, res: Response) => {
  const updateId = req.params.id.trim();
  const updated = await FoodModel.findByIdAndUpdate(
    updateId,
    {
      foodName: req.body.foodName,
      image: req.body.image,
      price: req.body.price,
      ingredients: "req.body.ingredients",
    },
    { new: true }
  );
  res.json(updated);
});