import { Router, Request, Response } from "express";

import ItemsController from "../controllers/items";
import logMiddleware from "../middleware/log";

const controller = new ItemsController();
const router = Router();

router.get("/", logMiddleware ,controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", controller.create);
router.patch("/:id", controller.update);

export default router;
