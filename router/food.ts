import { Router } from "express";
export const foodRouter = Router();
foodRouter.get("/", async (req, res) => {
  res.send({
    message: "Tsuiwan, buuz ",
  });
});
