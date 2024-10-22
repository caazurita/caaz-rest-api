import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send({
    items: ["user1", "user2", "user3"],
  });
});

export default router;
