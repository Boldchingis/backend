import { Request, Response, Router } from "express";
import { FoodOrderModel } from "../models/food-order";
import { CustomRequest } from "./types";
export const FoodOrderRouter = Router();

FoodOrderRouter.get("/", async (req: Request, res: Response) => {
  const foodOrder = await FoodOrderModel.find();
  res.send(foodOrder);
});

FoodOrderRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params;
  const item = await FoodOrderModel.find({ _id: id });
  res.send(item);
});

FoodOrderRouter.post("/", async (req: Request, res: Response) => {
  const customReq = req as unknown as CustomRequest;
  const user = customReq?.userId;
  const { foodOrderItems, totalPrice } = req.body;
  const order = {user, foodOrderItems, totalPrice};
  const newOrder = await FoodOrderModel.create(order);
  res.json(newOrder);
});

FoodOrderRouter.put("/:id", async (req: Request, res: Response) => {
  const { params, body } = req;
  const foodOrderId = params.id;
  const item = await FoodOrderModel.find({ _id: foodOrderId });
  const updatedItem = await FoodOrderModel.findByIdAndUpdate(
    foodOrderId,
    { ...item, ...body },
    { new: true }
  );

  res.json(updatedItem);
});

FoodOrderRouter.delete(
  "/:id",
  async (req: Request<{ id: string }>, res: Response) => {
    const foodOrderId = req.params.id;
    const deletedFoodOrder = await FoodOrderModel.findByIdAndDelete(
      foodOrderId
    );
    res.send("Deleted this item: " + deletedFoodOrder);
  }
);