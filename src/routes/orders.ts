import { Router } from "express";

import ItemsController from "../controllers/items";
import logMiddleware from "../middleware/log";
import sessionMiddleware from "../middleware/session";
import { passport } from "../utils/auth";

const controller = new ItemsController();
const router = Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  logMiddleware,
  controller.getAll
);

export default router;
