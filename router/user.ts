import { Request, Response, Router } from "express";
import { UserModel } from "../models/user";

export const UserRouter = Router();

UserRouter.get("/", async (req: Request, res: Response) => {
  const users = await UserModel.find();
  res.send(users);
});

UserRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params;
  const user = await UserModel.find({ _id: id });
  res.send(user);
});

UserRouter.post("/", async (req: Request, res: Response) => {
  const {body} = req;
  await UserModel.create({ ...body });
  const users = await UserModel.find();

  res.send(users);
});

UserRouter.put("/:id", async (req: Request, res: Response) => {
  const { params, body } = req;
  const userId = params.id;
  const user = await UserModel.find({ _id: userId });
  const updatedUser = await UserModel.findByIdAndUpdate(
    userId,
    { ...user, ...body },
    { new: true }
  );

  res.json(updatedUser);
});

UserRouter.delete(
  "/:id",
  async (req: Request<{ id: string }>, res: Response) => {
    const userId = req.params.id;
    const deletedUser = await UserModel.findByIdAndDelete(userId);
    res.send("Deleted this item: " + deletedUser);
  }
);