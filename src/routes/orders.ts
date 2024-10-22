import { Router } from "express";

import ItemsController from "../controllers/items";
import logMiddleware from "../middleware/log";
import sessionMiddleware from "../middleware/session";

const controller = new ItemsController();
const router = Router();

router.get("/", sessionMiddleware, logMiddleware, controller.getAll);

export default router;
